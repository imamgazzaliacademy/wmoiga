import { NextRequest } from 'next/server';

const BACKEND_URL = process.env.BACKEND_API_URL || 'http://localhost:5000';

async function handleProxy(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {

    try {
        const { path } = await params;
        const urlPath = path.join('/');
        const searchParams = request.nextUrl.search;

        // Construct the backend URL
        // Public routes in the backend are prefixed with /api
        const backendUrl = `${BACKEND_URL}/api/${urlPath}${searchParams}`;

        // Forward the headers, omitting 'host' to avoid backend host mismatch issues
        const headers = new Headers(request.headers);
        headers.delete('host');

        const fetchOptions: RequestInit & { duplex?: 'half' } = {
            method: request.method,
            headers,
        };

        // Forward the stream body directly
        if (request.method !== 'GET' && request.method !== 'HEAD' && request.body) {
            fetchOptions.body = request.body;
            fetchOptions.duplex = 'half';
        }

        const response = await fetch(backendUrl, fetchOptions);

        // Filter headers to return to the client
        const responseHeaders = new Headers(response.headers);
        responseHeaders.delete('content-encoding');

        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: responseHeaders,
        });
    } catch (error) {
        console.log('Frontend Proxy Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export const GET = handleProxy;
export const POST = handleProxy;
export const PUT = handleProxy;
export const PATCH = handleProxy;
export const DELETE = handleProxy;
export const OPTIONS = handleProxy;
