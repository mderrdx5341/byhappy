class PopUp
{
    private _title;
    private _body;
    public constructor(title: string = 'title', body: string = 'body')
    {
        this._title = title;
        this._body = body;
    }

    public show()
    {
        let popup = document.createElement('div');
        popup.className = 'popup';



        let title = document.createElement('div');
        title.className = 'popup__title';
        title.innerHTML = this._title;

        let body = document.createElement('div');
        body.className = 'popup__body';
        body.innerHTML = this._body;



        let closeButtton = document.createElement('button');
        closeButtton.className = 'popup__close';
        closeButtton.innerHTML = '✕';
        closeButtton.addEventListener('click', ()=>{popup.remove()})

        popup.appendChild(closeButtton);
        popup.appendChild(title);
        popup.appendChild(body);

        let page = document.querySelector('#app');
        page.appendChild(popup);
    }
}

export default PopUp;