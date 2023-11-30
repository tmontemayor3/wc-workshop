import { LitElement, html, css } from "lit";

export class NasaImage extends LitElement {

    constructor() {
        super();
        this.title='';
        this.source='';
    }

    static get properties() {
        return {
            source: {type:String},
            title: {type:String},
        };
    }

    static get styles() {
        return [css`
            .image {
                display: inline-block;
                margin: 20px;
            }

            .image img{
                width:400px;
                height:300px;
                display: block;
            }

            .image div{
                font-style: italic; 
                text-align: center;
                margin-top: 5px;
                font-size: 16px;
            }
        
        `];
    }

    render() {
        return html`
        <div class="image">
            <img src='${this.source}' />
            <div>${this.title}</div>
        </div>
        `;
    }
    static get tag() {
        return "nasa-image";
    }
}
customElements.define(NasaImage.tag, NasaImage);