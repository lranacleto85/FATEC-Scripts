export function Footer( ){

    return(

        <footer className="px-4 py-4 flex justify-center bg-zinc-900 gap-14 text-stone-400">
            <div>
                <div className="flex">
                    <h3>CONTATO</h3>
                </div>
                <hr className="my-2 border-t-2 border-stone-400"></hr>
                <div>
                    <h3>(19) 97083-1029</h3>
                    <h3>(19) 97381-0367</h3>
                </div>
            </div>
            <div>
                <div className="flex">
                    <h3>ENDERECO</h3>
                </div>
                <hr className="my-2 border-t-2 border-stone-400"></hr>
                <div>
                    <h3>Avenida Europa 850</h3>
                    <h3>Jardim Europa - São Paulo - SP</h3>
                </div>
            </div>
        </footer>

    );

}