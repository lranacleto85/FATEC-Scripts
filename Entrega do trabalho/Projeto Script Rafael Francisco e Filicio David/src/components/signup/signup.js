export function createUser(username, email, cpf, password) {
    const newUser = { username, email, cpf, password };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === username || user.cpf === cpf);
    if (userExists) {
        alert("Username or CPF already exists. Please choose a different one.");
        return;
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Account created successfully!");

    window.location.href = "../login/login.html";
}

export function TestaCPF(cpf) {
    cpf = cpf.replace(/\D/g, ""); 
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false; 
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.substring(10, 11));
}
