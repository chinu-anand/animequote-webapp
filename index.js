document.getElementById('getQuote').addEventListener('click', getApi);

function getApi() {
    fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quote => {
            let output = `
            <div>
                <div style="color:white;  border-radius: 10px;" class="p-3">        
                    <p style="font-family: 'Karla', sans-serif; font-style:italic; font-weight: bold; font-size:1.75rem;">
                    <emphasize>&ldquo; ${quote.quote} &rdquo;</emphaize>
                    </p>
                    <p class="m-0" style="font-width:bold; font-size:1rem;">-by <i>${quote.character}</i> from <i>${quote.anime}</i></p>
                </div>
            </div>
            `;
            console.log('printing data', quote);
            document.getElementById('output').innerHTML = output;
        }).catch((err) => console.log(err))
}