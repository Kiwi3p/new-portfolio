import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer class="footer bg-black relative pt-1 border-b-2">
    <div class="container mx-auto px-6">

        <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div class="flex flex-col">
                    <Link class="font-bold text-white uppercase mb-2" to="/">Home</Link>
                </div>
                <div class="flex flex-col">
                    <Link class="font-bold text-white uppercase mt-4 md:mt-0 mb-2" to="/about">About</Link>
                </div>
                <div class="flex flex-col">
                    <Link class="font-bold text-white uppercase mt-4 md:mt-0 mb-2" to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto px-6">
        <div class="mt-16 border-t-2 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
                <p class="text-sm text-white font-bold mb-2">
                    © 2021 by Jack Transue
                </p>
            </div>
        </div>
    </div>
</footer>
    )
}

export default Footer
