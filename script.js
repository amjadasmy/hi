const message = `

From the very first moment I saw you,
something about you felt different.

I didn't fall for your beauty alone.

I fell for your smile.

Your kindness.

Your heart.

Every day you stay in my mind.

You make ordinary days feel special.

I promise to respect you.

I promise to protect your heart.

I promise to stand beside you when life becomes difficult.

I promise to celebrate every happy moment with you.

I promise to never stop choosing you.

You are not just someone I like.

You are someone I truly care about.

If you allow me...

I would love to write the next chapter of life with you.

Will you be my girlfriend?

❤️
`;

let i = 0;

function openMessage(){

document.getElementById("cover").style.display="none";

document.getElementById("message").style.display="block";

document.getElementById("music").play();

typeWriter();

}

function typeWriter(){

if(i<message.length){

document.getElementById("typing").innerHTML+=message.charAt(i);

i++;

setTimeout(typeWriter,45);

}

}
