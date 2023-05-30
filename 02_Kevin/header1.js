// JavaScript Document
class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
        <div class="grid-container">
        <div class="item1">
            <a href="Site for school done easy.html">
            <img src="ITM logo inverted3.png"  width="30%" > </a>
        </div>

        <div class="item3">
        <form action=./Site%20for%20school%20done%20easy.html>
            <button class="button button2">Home</button></form>
        <form action=./Yrkesfagleg%20fordjuping%20vg1.html>
            <button class="button button1">YFF</button></form>
        <form action=./Konseptutv%20og%20programmering.html>
            <button class="button button1">Konseptutv og programmering</button></form>
        <form action=./Teknologiforståing.html>
            <button class="button button1">Teknologiforståing</button></form>
        <form action=./Prod%20og%20historieforteljing.html>
            <button class="button button1">Prod og historieforteljing</button></form>
        <form action=./Matematikk%20IM.html>
            <button class="button button1">Matematikk IM</button></form>
        <form action=./Naturfag%20IM.html>
            <button class="button button1">Naturfag IM</button></form>
        <form action=./Kroppsøving%20vg1.html>
            <button class="button button1">Kroppsøving</button></form>
        <form action=./Engelsk.html>
            <button class="button button1">Engelsk</button></form>
    </div>

        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);
