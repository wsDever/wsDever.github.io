/*
 * @author		DenGo
 * @email		i@dengo.org
 * @link		http://dengo.org
 * @date		2014-05-25
 * @project		playList
 * @description	保存歌曲信息
 */

var playList = [
		{
			'artist' : '玄鸟传说',
			'musicName' : '月缠纱',
			'musicAlbum' : '<今天你要嫁给我> 2004',
			'musicURL' : 'http://obng7479r.bkt.clouddn.com/%E7%8E%84%E9%B8%9F%E4%BC%A0%E8%AF%B4%20-%20%E6%9C%88%E7%BC%A0%E7%BA%B1.mp3',
			'avatarURL' : 'http://obng7479r.bkt.clouddn.com/music/img/pan_90.png',
			'musicTime' : '245'
		},
		{
			'artist' : '车静子',
			'musicName' : '又见烟雨楼',
			'musicAlbum' : '<又见烟雨楼> 2005',
			'musicURL' : 'http://obng7479r.bkt.clouddn.com/%E8%BD%A6%E9%9D%99%E5%AD%90%20-%20%E5%8F%88%E8%A7%81%E7%83%9F%E9%9B%A8%E6%A5%BC.mp3',
			'avatarURL' : 'http://obng7479r.bkt.clouddn.com/music/img/pan_90_3.png',
			'musicTime' : '331'
		},
		// {
		// 	'artist' : '小沈阳',
		// 	'musicName' : '醉解江湖',
		// 	'musicAlbum' : '<醉解江湖> 2010',
		// 	'musicURL' : 'http://wsmusic-music.stor.sinaapp.com/%E9%86%89%E8%A7%A3.mp3',
		// 	'avatarURL' : 'avatar/xsy.jpg',
		// 	'musicTime' : '297'
		// },
		// {
		// 	'artist' : '游戏音乐',
		// 	'musicName' : '枫林',
		// 	'musicAlbum' : '仙侠游戏音乐',
		// 	'musicURL' : 'http://wsmusic-bgmusic.stor.sinaapp.com/%E6%9E%AB%E6%9E%97.mp3',
		// 	'avatarURL' : 'avatar/xsy.jpg',
		// 	'musicTime' : '96'
		// },
		// {
		// 	'artist' : '游戏音乐',
		// 	'musicName' : '蝶飞花舞',
		// 	'musicAlbum' : '仙侠游戏音乐',
		// 	'musicURL' : 'http://wsmusic-bgmusic.stor.sinaapp.com/%E8%9D%B6%E9%A3%9E%E8%8A%B1%E8%88%9E.mp3',
		// 	'avatarURL' : 'avatar/xsy.jpg',
		// 	'musicTime' : '147'
		// },
		// {
		// 	'artist' : '游戏音乐',
		// 	'musicName' : '稻香村',
		// 	'musicAlbum' : '仙侠游戏音乐',
		// 	'musicURL' : 'http://wsmusic-bgmusic.stor.sinaapp.com/%E7%A8%BB%E9%A6%99%E6%9D%91.mp3',
		// 	'avatarURL' : 'avatar/xsy.jpg',
		// 	'musicTime' : '126'
		// },
		// {
		// 	'artist' : '游戏音乐',
		// 	'musicName' : '江南印象',
		// 	'musicAlbum' : '仙侠游戏音乐',
		// 	'musicURL' : 'http://wsmusic-bgmusic.stor.sinaapp.com/%E6%B1%9F%E5%8D%97%E5%8D%B0%E8%B1%A1.mp3',
		// 	'avatarURL' : 'avatar/xsy.jpg',
		// 	'musicTime' : '255'
		// },
		// {
		// 	'artist' : '游戏音乐',
		// 	'musicName' : '纵横天下',
		// 	'musicAlbum' : '仙侠游戏音乐',
		// 	'musicURL' : 'http://wsmusic-bgmusic.stor.sinaapp.com/%E7%BA%B5%E6%A8%AA%E5%A4%A9%E4%B8%8B.mp3',
		// 	'avatarURL' : 'avatar/xsy.jpg',
		// 	'musicTime' : '156'
		// },
		// {
		// 	'artist' : '游戏音乐',
		// 	'musicName' : '明镜菩提',
		// 	'musicAlbum' : '仙侠游戏音乐',
		// 	'musicURL' : 'http://wsmusic-bgmusic.stor.sinaapp.com/%E6%98%8E%E9%95%9C%E8%8F%A9%E6%8F%90.mp3',
		// 	'avatarURL' : 'avatar/xsy.jpg',
		// 	'musicTime' : '152'
		// },
		// {
		// 	'artist' : '游戏音乐',
		// 	'musicName' : '永恒之地',
		// 	'musicAlbum' : '仙侠游戏音乐',
		// 	'musicURL' : 'http://wsmusic-bgmusic.stor.sinaapp.com/%E6%B0%B8%E6%81%92%E4%B9%8B%E5%9C%B0.mp3',
		// 	'avatarURL' : 'avatar/xsy.jpg',
		// 	'musicTime' : '151'
		// },
		// {
		// 	'artist' : '游戏音乐',
		// 	'musicName' : '情深意重',
		// 	'musicAlbum' : '仙侠游戏音乐',
		// 	'musicURL' : 'http://wsmusic-bgmusic.stor.sinaapp.com/%E6%83%85%E6%B7%B1%E6%84%8F%E9%87%8D.mp3',
		// 	'avatarURL' : 'avatar/xsy.jpg',
		// 	'musicTime' : '119'
		// },
		// {
		// 	'artist' : '游戏音乐',
		// 	'musicName' : '扬州气氛',
		// 	'musicAlbum' : '仙侠游戏音乐',
		// 	'musicURL' : 'http://wsmusic-bgmusic.stor.sinaapp.com/%E6%89%AC%E5%B7%9E%E6%B0%94%E6%B0%9B.mp3',
		// 	'avatarURL' : 'avatar/xsy.jpg',
		// 	'musicTime' : '94'
		// },
		// {
		// 	'artist' : '游戏音乐',
		// 	'musicName' : '天空之城',
		// 	'musicAlbum' : '仙侠游戏音乐',
		// 	'musicURL' : 'http://wsmusic-bgmusic.stor.sinaapp.com/%E5%A4%A9%E7%A9%BA%E4%B9%8B%E5%9F%8E.mp3',
		// 	'avatarURL' : 'avatar/xsy.jpg',
		// 	'musicTime' : '120'
		// },
		// {
		// 	'artist' : '游戏音乐',
		// 	'musicName' : '昆仑',
		// 	'musicAlbum' : '仙侠游戏音乐',
		// 	'musicURL' : 'http://wsmusic-bgmusic.stor.sinaapp.com/%E6%98%86%E4%BB%91.mp3',
		// 	'avatarURL' : 'avatar/xsy.jpg',
		// 	'musicTime' : '120'
		// },
		// {
		// 	'artist' : '游戏音乐',
		// 	'musicName' : '江南小镇',
		// 	'musicAlbum' : '仙侠游戏音乐',
		// 	'musicURL' : 'http://wsmusic-bgmusic.stor.sinaapp.com/%E6%B1%9F%E5%8D%97%E5%B0%8F%E9%95%87.mp3',
		// 	'avatarURL' : 'avatar/xsy.jpg',
		// 	'musicTime' : '87'
		// }
	];
