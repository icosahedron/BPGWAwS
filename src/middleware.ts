import { getSupabaseReqResClient } from "@/supabase-utils/reqResClient";
import { NextRequest, NextResponse } from "next/server"; // Importing NextRequest and NextResponse types

export async function middleware(request: NextRequest) { 
    const response = await getSupabaseReqResClient(request); 
	
	return response;
}

// export const config = {
// 	matcher: ["/((?!.*\\.).*)"],
// };
