export default class Youtube {
    //네트워크 처리하는 클래스
    constructor(key){
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow',
          };
    }
    async mostPopular(){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&pageToken=CAUQAA&key=${this.key}`, this.getRequestOptions);
        const result_1 = await response.json();
        return result_1.items;
    }
    async search(query){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&pageToken=CBkQAA&q=${query}&key=${this.key}`, this.requestOptions);
        const result_1 = await response.json();
        return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}