document.addEventListener('DOMContentLoaded', () => {
    const footerColumns = document.querySelectorAll('.footer-column ul');

    footerColumns.forEach(column => {
        column.addEventListener('mouseenter', () => {
            column.classList.add('animate');
        });

        column.addEventListener('mouseleave', () => {
            column.classList.remove('animate');
        });
    });
});

let footer = document.querySelector('.footer');
let canvas = document.getElementById('dotsCanvas');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
const ctx = canvas.getContext('2d');
const dots = [];
const arrayColors = ['#A00000', '#E50914', '#Ff0000', '#fff', '#303030'];
for (let index = 0; index < 120; index++) {
    dots.push({
        x:  Math.floor(Math.random() * canvas.width),
        y:  Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 5,
        color: arrayColors[Math.floor(Math.random()* 5)]
    });
}
const drawDots = () => {
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI*2);
        ctx.fill();
    })
}
drawDots();
footer.addEventListener('mousemove', (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
    let mouse = {
        x:  event.pageX - footer.getBoundingClientRect().left,
        y:  event.pageY - footer.getBoundingClientRect().top
    }
    dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if(distance < 200){
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    })
})
footer.addEventListener('mouseout', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
})
window.addEventListener('resize', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = footer.offsetWidth;
    canvas.height = footer.offsetHeight;

    dots = [];
    for (let index = 0; index <50; index++) {
        dots.push({
            x:  Math.floor(Math.random() * canvas.width),
            y:  Math.floor(Math.random() * canvas.height),
            size: Math.random() * 3 + 5,
            color: arrayColors[Math.floor(Math.random()* 5)]
        });
    }
    drawDots();
})






document.addEventListener('DOMContentLoaded', () => {
    const footerColumns = document.querySelectorAll('.footer-column ul');

    footerColumns.forEach(column => {
        column.addEventListener('mouseenter', () => {
            column.classList.add('animate');
        });

        column.addEventListener('mouseleave', () => {
            column.classList.remove('animate');
        });
    });

    const footer = document.querySelector('.footer');
    const canvas = document.getElementById('dotsCanvas');
    
    const setCanvasSize = () => {
        canvas.width = footer.offsetWidth;
        canvas.height = footer.offsetHeight;
    };

    setCanvasSize();

    const ctx = canvas.getContext('2d');
    const dots = [];
    const arrayColors = ['#A00000', '#E50914', '#Ff0000', '#fff', '#303030'];
    for (let index = 0; index < 120; index++) {
        dots.push({
            x:  Math.floor(Math.random() * canvas.width),
            y:  Math.floor(Math.random() * canvas.height),
            size: Math.random() * 3 + 5,
            color: arrayColors[Math.floor(Math.random()* 5)]
        });
    }

    const drawDots = () => {
        dots.forEach(dot => {
            ctx.fillStyle = dot.color;
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
            ctx.fill();
        });
    };

    drawDots();

    footer.addEventListener('mousemove', (event) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawDots();
        const mouse = {
            x:  event.pageX - footer.getBoundingClientRect().left,
            y:  event.pageY - footer.getBoundingClientRect().top
        };
        dots.forEach(dot => {
            const distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
            if(distance < 200){
                ctx.strokeStyle = dot.color;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(dot.x, dot.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        });
    });

    footer.addEventListener('mouseout', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawDots();
    });

    window.addEventListener('resize', () => {
        setCanvasSize();
        drawDots();
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setCanvasSize();
                drawDots();
            }
        });
    });

    observer.observe(footer);
});

