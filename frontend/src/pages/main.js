const submit = document.getElementById('submit')
setTimeout(() => {
    submit.addEventListener('click', (e) => {
        document.querySelector('.msg').textContent = '';
        document.querySelector('#image').src = '';

        const description = document.querySelector('#description').value;
        const imgSize = document.querySelector("#size").value

        if (description === '') {
            alert('Reuired');
            return
        }
        generateImgReq(description, imgSize)
    })

    async function generateImgReq(description, imgSize) {
        try {
            showLoader();
            const res = await fetch('http://localhost:5000/openai/genimg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    description,
                    imgSize,
                }),
            });
            if (!res.ok) {
                hideLoader();
                throw new Error('Could not generated, sorry!')
            }
            const data = await res.json()
            const imageUrl = data.data;
            document.querySelector('#image').src = imageUrl;
            hideLoader()

        } catch (err) {
            document.querySelector('.msg').textContent = err
        }
    }
    function showLoader() {
        document.querySelector('.spinner').classList.add('show')
    }
    function hideLoader() {
        document.querySelector('.spinner').classList.remove('show')
    }
}, 1000)

