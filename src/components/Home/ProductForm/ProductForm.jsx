const ProductForm = () => {
    return (
        <div>

            <form class="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
                    <input type="email" id="email"
                           className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                           placeholder="name@flowbite.com" required/>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Your
                        password</label>
                    <input type="password" id="password"
                           className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                           placeholder="••••••••" required/>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Repeat
                        password</label>
                    <input type="password" id="password"
                           className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                           placeholder="••••••••" required/>
                </div>
                <label htmlFor="remember" className="flex items-center mb-5">
                    <input id="remember" type="checkbox" value=""
                           className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                           required/>
                    <p class="ms-2 text-sm font-medium text-heading select-none">I agree with the <a href="#"
                                                                                                     class="text-fg-brand hover:underline">terms
                        and conditions</a>.</p>
                </label>
                <button type="submit"
                        class="text-white bg-blue-800 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit
                </button>
            </form>

        </div>
    );
};

export default ProductForm;