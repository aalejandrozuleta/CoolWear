export function verificationName(name, specialChars, numbers) {
    if (name.trim() === '') {
        return 'El campo de nombre no puede estar en blanco';
    }

    if (specialChars.test(name)) {
        return 'El nombre no puede contener caracteres especiales';
    }

    if (numbers.test(name)) {
        return 'El nombre no puede contener números';
    }

    return null; 
}

export function verificationPhone(phone, specialChars) {
    if (specialChars.test(phone)) {
        return 'El teléfono no puede contener caracteres especiales';
    }

    if (phone.length !== 10) {
        return 'El teléfono debe tener 10 dígitos';
    }

    return null; 
}

export function verificationEmail(email) {
    if (!email.includes('hotmail.com') && !email.includes('gmail.com')) {
        return 'El correo debe ser Hotmail o Gmail';
    }

    return null; 
}


