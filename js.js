// scripts.js

document.getElementById('addClientButton').addEventListener('click', function() {
    const formContainer = document.getElementById('addAppointmentFormContainer');
    formContainer.classList.toggle('hidden');
});

document.getElementById('city').addEventListener('change', function() {
    const otherCityInput = document.getElementById('otherCity');
    if (this.value === 'Outro') {
        otherCityInput.classList.remove('hidden');
        otherCityInput.setAttribute('required', 'required');
    } else {
        otherCityInput.classList.add('hidden');
        otherCityInput.removeAttribute('required');
    }
});

document.getElementById('createdBy').addEventListener('change', function() {
    const otherCreatedByInput = document.getElementById('otherCreatedBy');
    if (this.value === 'Outro') {
        otherCreatedByInput.classList.remove('hidden');
        otherCreatedByInput.setAttribute('required', 'required');
    } else {
        otherCreatedByInput.classList.add('hidden');
        otherCreatedByInput.removeAttribute('required');
    }
});

document.getElementById('addAppointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const clientName = document.getElementById('clientName').value;
    const cpf = document.getElementById('cpf').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value === 'Outro' ? document.getElementById('otherCity').value : document.getElementById('city').value;
    const attorney = document.getElementById('attorney').value;
    const createdBy = document.getElementById('createdBy').value === 'Outro' ? document.getElementById('otherCreatedBy').value : document.getElementById('createdBy').value;

    const appointmentItem = document.createElement('div');
    appointmentItem.classList.add('bg-gray-800', 'p-4', 'border', 'border-gray-600', 'rounded-md', 'shadow-md');
    appointmentItem.innerHTML = `
        <div>
            <p class="font-semibold">Nome do Cliente: ${clientName}</p>
            <p>CPF: ${cpf}</p>
            <p>Data: ${date}</p>
            <p>Hora: ${time}</p>
            <p>Telefone: ${phone}</p>
            <p>Cidade: ${city}</p>
            <p>Atendimento por: ${attorney}</p>
            <p>Atendimento criado por: ${createdBy}</p>
        </div>
        <div class="flex justify-between items-center mt-2">
            <a href="https://wa.me/55${phone.replace(/\D/g, '')}" target="_blank" class="text-green-500"><i class="fab fa-whatsapp fa-2x"></i></a>
            <a href="https://meet.google.com/" target="_blank" class="text-blue-500"><i class="fas fa-video fa-2x"></i></a>
            <button class="text-red-500 delete-button"><i class="fas fa-trash fa-2x"></i></button>
        </div>
    `;

    document.getElementById('appointmentsList').appendChild(appointmentItem);

    // Clear form
    document.getElementById('addAppointmentForm').reset();
    document.getElementById('addAppointmentFormContainer').classList.add('hidden');

    // Add delete functionality to the new button
    appointmentItem.querySelector('.delete-button').addEventListener('click', function() {
        appointmentItem.remove();
    });
});

// Add delete functionality to existing buttons
document.querySelectorAll('.delete-button').forEach(button => {
    button.addEventListener('click', function() {
        button.closest('.bg-gray-800').remove();
    });
});
