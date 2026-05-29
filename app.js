async function cargar(
archivo,
contenedor,
catalogo=false
){

const zona=
document.querySelector(
contenedor
);

if(!zona)
return;

const r=
await fetch(
archivo
);

const data=
await r.json();

data.forEach(
item=>{

zona.innerHTML+=`

<div class="item">

<img
loading="lazy"
src="${item.imagen}"
>

${
catalogo
?

`

<div class="card-content">

<h3>

${item.titulo}

</h3>

<p>

${item.descripcion}

</p>

</div>

`

:

""

}

</div>

`;

}

);

document
.querySelectorAll(
contenedor+
" .item"
)
.forEach(
(el,i)=>{

el.onclick=
()=>{

document
.querySelector(
".lightbox"
)
.style.display=
"flex";

document
.getElementById(
"lightbox-img"
)
.src=
data[i].imagen;

};

}
);

}

document
.querySelector(
".cerrar"
)
?.addEventListener(
"click",
()=>{

document
.querySelector(
".lightbox"
)
.style.display=
"none";

}
);

cargar(
"trabajos.json",
".galeria"
);

cargar(
"catalogo.json",
".cards",
true
);