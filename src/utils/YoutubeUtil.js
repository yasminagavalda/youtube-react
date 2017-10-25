export default class YoutubeUtil {

	static extractVideos(data) {
		return data.items
    	.filter(v => v.id.kind === "youtube#video")
    	.map(v => (
		    {
		      id: v.id.videoId,
		      title: v.snippet.title,
		      image: v.snippet.thumbnails.medium.url
		    }
			))
	}
}