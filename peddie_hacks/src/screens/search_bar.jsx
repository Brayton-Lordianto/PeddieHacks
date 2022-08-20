

export default function Nav() {
    return(
        <body>
        <div class="flex flex-col items-center justify-center h-screen">
          <div class="mb-6">
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google Logo"
              class="object-cover" />
          </div>
          <div class="flex items-center w-full mx-auto mb-4 border rounded-full lg:max-w-2xl hover:shadow-md">
            <div class="pl-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="text" class="w-full bg-transparent rounded-full py-[14px] pl-4 outline-none" />
            <div class="pr-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 text-blue-600 cursor-pointer" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
          </div>
         
    
        </div>
      </body>
    
    )
}