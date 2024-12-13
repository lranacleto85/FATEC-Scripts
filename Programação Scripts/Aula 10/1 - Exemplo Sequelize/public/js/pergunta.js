const form = document.getElementById("perguntaForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevenir o envio padrão do formulário

  const formData = new FormData(form);
  const formDataObject = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/pergunta/salvar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formDataObject),
    });

    if (response.status === 201) {
      const data = await response.json();
      Swal.fire({
        title: "Sucesso!",
        text: `Pergunta criada com sucesso: ${data.titulo}`,
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      const error = await response.json();
      Swal.fire({
        title: "Erro!",
        text: `Erro ao criar pergunta: ${error.error}`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  } catch (err) {
    Swal.fire({
      title: "Erro!",
      text: `Erro: ${err.message}`,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
});
