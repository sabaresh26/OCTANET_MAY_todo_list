window.addEventListener('load', () => {
    const form = document.querySelector("#form");
    const input = document.querySelector("#t1");
    const list_el = document.querySelector("#tasks");
    const delete_all_button = document.querySelector("#delete-all-button");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_checkbox_el = document.createElement('input'); // Create checkbox input
        task_checkbox_el.type = 'checkbox';
        task_checkbox_el.classList.add('checkbox');
        task_content_el.appendChild(task_checkbox_el); // Append checkbox input to the content div

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        task_el.appendChild(task_content_el);
        task_el.appendChild(task_delete_el);

        list_el.appendChild(task_el);

        input.value = '';

        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });

        task_checkbox_el.addEventListener('change', () => {
            if (task_checkbox_el.checked) {
                task_input_el.style.textDecoration = 'line-through'; // Apply strikethrough style to task text
                list_el.appendChild(task_el); // Move task to the bottom
            } else {
                task_input_el.style.textDecoration = 'none'; // Remove strikethrough style
            }
        });
    });

    delete_all_button.addEventListener('click', () => {
        const tasks = document.querySelectorAll('.task');
        tasks.forEach(task => {
            list_el.removeChild(task);
        });
    });
});
