
function ekleGorev() {
    const input = document.getElementById('todoInput');
    const gorev = input.value.trim();
    
    if (gorev !== '') {
        const todoList = document.getElementById('todoList');
        
        const yeniGorev = document.createElement('div');
        yeniGorev.className = 'todo-item';
        
        yeniGorev.innerHTML = `
            <button class="status-btn incomplete-btn" onclick="durumDegistir(this)">✕</button>
            <span class="todo-text">${gorev}</span>
            <button class="sil-btn" onclick="this.parentElement.remove()">Sil</button>
        `;
        
        todoList.appendChild(yeniGorev);
        input.value = '';
    }
}

function durumDegistir(btn) {
    const todoItem = btn.parentElement;
    const isCompleted = todoItem.classList.toggle('completed');
    
    if (isCompleted) {
        btn.className = 'status-btn complete-btn';
        btn.textContent = '✓';
    } else {
        btn.className = 'status-btn incomplete-btn';
        btn.textContent = '✕';
    }
}

// Enter tuşu ile ekleme
document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        ekleGorev();
    }
});
