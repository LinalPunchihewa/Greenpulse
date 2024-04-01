

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.tabLink');
    const linkCount = links.length;

    document.addEventListener('keydown', function (event) {
        const activeElement = document.activeElement;
        const keyCode = event.keyCode;

        if (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40) {
            event.preventDefault();

            let currentIndex = -1;
            for (let i = 0; i < linkCount; i++) {
                if (activeElement === links[i]) {
                    currentIndex = i;
                    break;
                }
            }

            let nextIndex;
            if (keyCode === 37 || keyCode === 38) {
                nextIndex = currentIndex > 0 ? currentIndex - 1 : linkCount - 1;
            } else {
                nextIndex = currentIndex < linkCount - 1 ? currentIndex + 1 : 0;
            }

            links[nextIndex].focus();
        }
    });
});




