function Footer (){
    return(
        <footer className="w-full bg-surface-container-lowest border-t border-outline-gold mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile
         md:px-margin-desktop py-8 max-w-container-max mx-auto md:max-w-7xl">
            <p className="font-label-caps text-label-caps text-on-surface opacity-50 mb-4 md:mb-0">
                © 1947 BLACK VAULT INVESTIGATIONS. CLASSIFIED MATERIAL.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
                <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all" href="#">Archives</a>
                <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all" href="#">Terms of Service</a>
                <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all" href="#">Agency Contact</a>
            </div>
         </div>
        </footer>
    )
}

export default Footer