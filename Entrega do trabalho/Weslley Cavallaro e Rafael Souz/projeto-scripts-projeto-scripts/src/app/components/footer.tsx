export function Footer( ){

    return(

        <footer className="px-4 py-4 flex justify-center bg-zinc-900 gap-14 text-stone-400" role="contentinfo">
            <div>
                <div className="flex">
                    <h3 id="contato">CONTATO</h3>
                </div>
                <hr className="my-2 border-t-2 border-stone-400" aria-hidden="true" />
                <div>
                    <h4 aria-labelledby="contato">Telefone:</h4>  {/* Usar um título secundário para a seção de telefone */}
                    <p>(19) 97083-1029</p>
                    <p>(19) 97381-0367</p>
                </div>
            </div>
            <address>
                <div className="flex">
                    <h3 id="endereco">ENDEREÇO</h3>
                </div>
                <hr className="my-2 border-t-2 border-stone-400" aria-hidden="true" />
                <div>
                    <h4 aria-labelledby="endereco">Endereço:</h4>  {/* Usar um título secundário para a seção de endereço */}
                    <p>Avenida Europa 850</p>
                    <p>Jardim Europa - São Paulo - SP</p>
                </div>
            </address>
        </footer>

    );

}