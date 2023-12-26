import React from 'react';

const registration = () => {
    return (
       
<div class="bg-gray-100 flex items-center justify-center h-screen ">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full ">
        <div class="flex justify-center mb-6">
            <span class="inline-block bg-gray-200 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
            </span>
        </div>
        <h2 class="text-2xl font-semibold text-center mb-4">Create a new account</h2>
        <p class="text-gray-600 text-center mb-6">Enter your details to register.</p>
        <form>
        <div class="relative mt-4">
                  <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Name</p>
                  <input placeholder="Name" type="text" class="border placeholder-gray-400 focus:outline-none
                   focus:border-b-cyan-900 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
                </div>
        <div class="relative mt-4">
                  <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
                  <input placeholder="123@ex.com" type="email" class="border placeholder-gray-400 focus:outline-none
                   focus:border-b-cyan-900 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
                </div>
        <div class="relative mt-5">
                  <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Password</p>
                  <input placeholder="Password" type="text" class="border placeholder-gray-400 focus:outline-none
                   focus:border-b-cyan-900 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
                </div>


            <button type="submit" class=" mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Register</button>
            <p class="text-gray-600 text-xs text-center mt-4">
                By clicking Register, you agree to accept  Grocery Shop
                <a href="#" class="text-blue-500 hover:underline">Terms and Conditions</a>.
            </p>

            <div class="inline-flex items-center justify-center w-full">
                  <hr class="w-64 h-px my-8 bg-neutral-200 border-0 white" />
                  <span
                    class="absolute px-3 font-medium text-black-200 -translate-x-1/2 left-1/2 bg-white"
                  >Have you an account?</span>

                </div>


                <div class="relative">
                  <a class=" btn btn-outline btn-primary w-full inline-block pt-2 pr-5 pb-2 pl-5 text-base font-medium text-center text-indigo-500  
                  rounded-lg transition duration-200 hover:bg-indigo-600 ease">Login your account</a>
                </div>

                
        </form>
    </div>
</div>
    );
};

export default registration;