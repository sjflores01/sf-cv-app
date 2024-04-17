export class Content {
    public Title : string;
    public Text : string;
    public ImgUrl: string;
    
    constructor(title: string = '', text: string, imgUrl: string = '') {
        this.Title = title;
        this.Text = text;
        this.ImgUrl = imgUrl
    }
}