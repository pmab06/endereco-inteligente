const form = document.querySelector("form");
        const switchEl = document.getElementById("switchCheckDefault");
        const cepEl = document.getElementById("cep");
        const logrEl = document.getElementById("logr");
        const numEl = document.getElementById("num");
        const ufEl = document.getElementById("uf");
        const compEl = document.getElementById("comp");

        // habilita validação do HTML por padrão
        switchEl.checked = true
        form.removeAttribute('novalidate');
        
        // ativa e desativa a validação do HTML com elemento switch do bootstrap
        switchEl.addEventListener('change', () => {
            if (switchEl.checked) {
                // desativa validação do HTML
                form.removeAttribute('novalidate');
            } else {
                // ativa validação do HTML
                form.setAttribute('novalidate', '');
            }
        });


        // máscaras usando IMask
        IMask(ufEl, { mask: /^[a-zA-Z]{0,2}$/ });
        IMask(cepEl, { mask: "00000-000" });

        // converter UF para maiúsculas
        function convertToUpper(event) {
            const targetElmt = event.target;
            targetElmt.value = targetElmt.value.toUpperCase();
        }

        ufEl.addEventListener('input', convertToUpper);

        // permitir apenas números no campo Número
        numEl.addEventListener('input', () => {
            const onlyDigits = numEl.value.replace(/\D/g, '');
            if (numEl.value !== onlyDigits) {
                numEl.value = onlyDigits;
            }
        });


        // envio do formulário
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // validação em JavaScript customizada
            let mensagens = [];

            // validação do CEP
            if (cepEl.value && cepEl.value.trim() !== "") {
                if (cepEl.value.replace(/\D/g, "").length !== 8) {
                    mensagens.push("O campo CEP precisa de 8 dígitos!");
                }
            } else {
                mensagens.push("O campo CEP está vazio!");
            }

            // validação do logradouro
            if (logrEl.value && logrEl.value.trim() !== "") {
                if (logrEl.value.length < 5) {
                    mensagens.push("O campo Logradouro precisa de no mínimo 5 caracteres!");
                }
            } else {
                mensagens.push("O campo Logradouro está vazio!");
            }

            // validação do número
            if (!numEl.value || numEl.value.trim() === "") {
                mensagens.push("O campo Número está vazio!");
            }

            // validação da UF
            if (ufEl.value && ufEl.value.trim() !== "") {
                if (ufEl.value.length !== 2 || !/^[A-Z]{2}$/.test(ufEl.value)) {
                    mensagens.push("O campo UF precisa ter exatamente 2 letras maiúsculas!");
                }
            } else {
                mensagens.push("O campo UF está vazio!");
            }

            // exibe mensagem de erro ou de sucesso
            if (mensagens.length > 0) {
                alert("Erros encontrados:\n\n" + mensagens.join("\n"));
            } else {
                alert("Endereço cadastrado com sucesso!");
                console.log({
                    cep: cepEl.value,
                    logradouro: logrEl.value,
                    numero: numEl.value,
                    uf: ufEl.value,
                    complemento: compEl.value
                });
            }
        });