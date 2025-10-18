// Backend API URL - change this based on environment
const API_URL = 'http://localhost:3000';

// Check backend status on load
window.addEventListener('DOMContentLoaded', () => {
    checkBackendStatus();
    loadTasks();
    
    // Add Enter key support for adding tasks
    document.getElementById('taskInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

async function checkBackendStatus() {
    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');
    
    try {
        const response = await fetch(`${API_URL}/`);
        const data = await response.json();
        
        statusDot.className = 'status-dot connected';
        statusText.textContent = `✅ Connected to backend: ${data.message}`;
    } catch (error) {
        statusDot.className = 'status-dot error';
        statusText.textContent = '❌ Backend connection failed';
        console.error('Backend connection error:', error);
    }
}

async function loadTasks() {
    try {
        const response = await fetch(`${API_URL}/api/tasks`);
        const tasks = await response.json();
        
        const taskList = document.getElementById('taskList');
        
        if (tasks.length === 0) {
            taskList.innerHTML = `
                <div class="empty-state">
                    <p>📝 No tasks yet!</p>
                    <p style="font-size: 0.9rem;">Add your first task above.</p>
                </div>
            `;
            return;
        }
        
        taskList.innerHTML = tasks.map(task => `
            <li class="task-item ${task.completed ? 'completed' : ''}">
                <input 
                    type="checkbox" 
                    class="task-checkbox" 
                    ${task.completed ? 'checked' : ''}
                    onchange="toggleTask(${task.id})"
                >
                <span class="task-text">${escapeHtml(task.title)}</span>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </li>
        `).join('');
    } catch (error) {
        console.error('Error loading tasks:', error);
        alert('Failed to load tasks. Please check if backend is running.');
    }
}

async function addTask() {
    const taskInput = document.getElementById('taskInput');
    const title = taskInput.value.trim();
    
    if (!title) {
        alert('Please enter a task title');
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/api/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title }),
        });
        
        if (response.ok) {
            taskInput.value = '';
            loadTasks();
        } else {
            alert('Failed to add task');
        }
    } catch (error) {
        console.error('Error adding task:', error);
        alert('Failed to add task. Please check if backend is running.');
    }
}

async function toggleTask(id) {
    try {
        const response = await fetch(`${API_URL}/api/tasks/${id}`, {
            method: 'PUT',
        });
        
        if (response.ok) {
            loadTasks();
        } else {
            alert('Failed to update task');
        }
    } catch (error) {
        console.error('Error toggling task:', error);
        alert('Failed to update task');
    }
}

async function deleteTask(id) {
    try {
        const response = await fetch(`${API_URL}/api/tasks/${id}`, {
            method: 'DELETE',
        });
        
        if (response.ok) {
            loadTasks();
        } else {
            alert('Failed to delete task');
        }
    } catch (error) {
        console.error('Error deleting task:', error);
        alert('Failed to delete task');
    }
}

// Helper function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

