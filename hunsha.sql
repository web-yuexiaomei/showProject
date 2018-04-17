SET NAMES UTF8;
DROP DATABASE IF EXISTS wv;
CREATE DATABASE wv CHARSET=UTF8;
USE wv;
#用户表
CREATE TABLE wv_user(
	`uid` int(11)   PRIMARY KEY auto_increment,
  `uname` varchar(32) default NULL,
  `upwd` varchar(32) default NULL,
  `email` varchar(64) default NULL,
  `phone` varchar(16) default NULL,
  `avatar` varchar(128) default NULL,
  `user_name` varchar(32) default NULL,
  `gender` int(11) default NULL
);
INSERT INTO `wv_user` VALUES ('1', 'dingding', '123456', 'ding@qq.com', '13511011000', 'img/avatar/default.png', '丁春秋', '0');
INSERT INTO `wv_user` VALUES ('2', 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '当当喵', '1');
INSERT INTO `wv_user` VALUES ('3', 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1');
INSERT INTO `wv_user` VALUES ('4', 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0');
INSERT INTO `wv_user` VALUES ('5', '1111', '111111', '441977193@qq.com', '18357100796', null, null, null);
INSERT INTO `wv_user` VALUES ('6', 'ABCD', '123456', '123@qq.com', '13538894495', null, null, null);
INSERT INTO `wv_user` VALUES ('7', 'mohk', '123456', '11@qq.com', '13512312312', null, null, null);
INSERT INTO `wv_user` VALUES ('8', '121123', 'w13945128995', '491000888@qq.com', '13213389258', null, null, null);
INSERT INTO `wv_user` VALUES ('9', '555555', '5555555', '55555555@163.com', '13400000000', null, null, null);
INSERT INTO `wv_user` VALUES ('10', 'xuyong', '123456', '123456789@qq.com', '15525623622', null, null, null);
INSERT INTO `wv_user` VALUES ('11', 'admin', 'cxy930123', 'mail@xingyu1993.cn', '13580510164', null, null, null);
INSERT INTO `wv_user` VALUES ('12', 'siyongbo', '900427', '616188545@qq.com', '18447103998', null, null, null);
INSERT INTO `wv_user` VALUES ('13', 'qwerty', '123456', '1091256014@qq.com', '15617152367', null, null, null);
INSERT INTO `wv_user` VALUES ('14', 'dingziqiang', '456456', '996534706@qq.com', '15567502520', null, null, null);
INSERT INTO `wv_user` VALUES ('15', 'hdb2264068', 'huang123', '471062503@qq.com', '18898405759', null, null, null);
INSERT INTO `wv_user` VALUES ('16', 'wenhua', '654321', 'liwenhua@tedu.cn', '15012345678', null, null, null);
INSERT INTO `wv_user` VALUES ('17', '<img>', 'cxy930123', 'mail@xingyu1993.cn.1', '11111111111', null, null, null);
INSERT INTO `wv_user` VALUES ('18', '</body>', 'cxy930123', 'mail@xingyu1993.cn.2', '22222222222', null, null, null);
INSERT INTO `wv_user` VALUES ('19', '<img src=@>', 'cxy930123', 'mail@xingyu1993.cn.3', '33333333333', null, null, null);
INSERT INTO `wv_user` VALUES ('20', '气航航', 'wyh961130', '1419591926@qq.com', '15927204115', null, null, null);
INSERT INTO `wv_user` VALUES ('21', 'Jessy', 'ac210921', '123456@qq.com', '13523456789', null, null, null);
INSERT INTO `wv_user` VALUES ('22', 'yuanxf', '123456', 'yuanxf@tedu.cn', '13537763301', null, null, null);
INSERT INTO `wv_user` VALUES ('23', '查安军', '025520', '27514172112@qq.com', '18158899905', null, null, null);
INSERT INTO `wv_user` VALUES ('24', '123456', '123456', '123456@1.com', '13815668132', null, null, null);
INSERT INTO `wv_user` VALUES ('25', '1234', '111111', '734713428@qq.com', '18061920422', null, null, null);
INSERT INTO `wv_user` VALUES ('26', 'qwe12345', '123123', '1191769510@qq.com', '15234010643', null, null, null);
INSERT INTO `wv_user` VALUES ('27', '海贼王', '5124457', 'hxxcrocky@qq.com', '18826450879', null, null, null);
INSERT INTO `wv_user` VALUES ('28', 'hanrufuyun00', 'hanrufuyun11', '458205630@qq.com', '13853114827', null, null, null);
INSERT INTO `wv_user` VALUES ('29', 'li999999', 'li999999', 'limingdir@163.com', '18557512341', null, null, null);
INSERT INTO `wv_user` VALUES ('30', '111111111111', '123456', '1057631733@qq.com', '15275106677', null, null, null);
INSERT INTO `wv_user` VALUES ('31', 'tom', '123456', 'tom@tedu.cn', '13801234568', null, null, null);
INSERT INTO `wv_user` VALUES ('32', 'zhouzhi', '123456', '2206344145@qq.com', '17600587478', null, null, null);
INSERT INTO `wv_user` VALUES ('33', 'juleck', '123456', 'wuhaofushan@sina.com', '12345678901', null, null, null);
INSERT INTO `wv_user` VALUES ('34', 'yangtao', '123456', '250737026@qq.com', '18256953222', null, null, null);
INSERT INTO `wv_user` VALUES ('35', 'tarena', '123456', '783664829@qq.com', '17711625897', null, null, null);
INSERT INTO `wv_user` VALUES ('36', 'xiaobai', 'xx527603', '1196465493@qq.com', '13980312111', null, 'lulu', '0');
INSERT INTO `wv_user` VALUES ('37', '璐璐lu', '546521ll', '1273447080@qq.com', '15892761793', null, null, null);
INSERT INTO `wv_user` VALUES ('38', '胖王二二', 'woaidoubi1.', '1179524522@qq.com', '13269195181', null, '', '0');
INSERT INTO `wv_user` VALUES ('39', 'Yeye ', '123456', '1610608370@qq.com', '15062394551', null, null, null);
INSERT INTO `wv_user` VALUES ('40', 'lsj', '123456', '11324564879@qq.com', '13156467891', null, null, null);
INSERT INTO `wv_user` VALUES ('41', 'lsj', '123456', '11324564879@qq.com', '13156467891', null, null, null);
INSERT INTO `wv_user` VALUES ('42', 'lsj', '123456', '11324564879@qq.com', '13156467891', null, null, null);
INSERT INTO `wv_user` VALUES ('43', 'lsj', '123456', '11324564879@qq.com', '13156467891', null, null, null);
INSERT INTO `wv_user` VALUES ('44', 'lsj', '123456', '11324564879@qq.com', '13156467891', null, null, null);
INSERT INTO `wv_user` VALUES ('45', 'hjh', '958030', 'hjh@126.com', '17812344567', null, null, null);
INSERT INTO `wv_user` VALUES ('46', 'ewq', '123456', '1234567890@qq.com', '12345678909', null, null, null);
INSERT INTO `wv_user` VALUES ('47', 'pipi', '123456', '78@qq.com', '12367889993', null, null, null);
INSERT INTO `wv_user` VALUES ('48', 'Lovica', '309418727', '1684707021@qq.com', '18435130456', null, null, null);
INSERT INTO `wv_user` VALUES ('49', 'htt0908', '19920908', '418720482@qq.com', '15244691033', null, null, null);
INSERT INTO `wv_user` VALUES ('50', 'SUXUEMEI', '123456', 'SUXUEMEI@qq.com', '15817338974', null, null, null);
INSERT INTO `wv_user` VALUES ('51', 'zhong', '123456', '123456789@126.com', '13120211111', null, null, null);
INSERT INTO `wv_user` VALUES ('52', '金豆豆', '123456789', '1170363143@qq.com', '15738619097', null, null, null);
INSERT INTO `wv_user` VALUES ('53', 'wangjunfei', '123456', '396225880@qq.com', '13205935797', null, null, null);
INSERT INTO `wv_user` VALUES ('54', 'gijhglkhglkh', '123456', 'sjksfj@fjdh.com', '15698765423', null, null, null);
INSERT INTO `wv_user` VALUES ('55', 'zuiyd1314', 'zuiyh1994', '528396697@qq.com', '15927843908', null, null, null);
INSERT INTO `wv_user` VALUES ('56', 'xiaoming123', '123456', '54646@qq.com', '13553688534', null, null, null);
INSERT INTO `wv_user` VALUES ('57', 'yuanzhi', '123456', '270096123@qq.com', '15962573639', null, null, null);
INSERT INTO `wv_user` VALUES ('58', 'fengkuang11', 'fengkuang113', '1135779768@qq.com', '18559132247', null, null, null);
INSERT INTO `wv_user` VALUES ('59', 'fengkuang', '123456', '113577976@qq.com', '18559132248', null, null, null);
INSERT INTO `wv_user` VALUES ('60', 'yxzaaa', '123456', '2280517552@qq.com', '13716225357', null, null, null);
INSERT INTO `wv_user` VALUES ('61', 'linlei0001', '58874439', '876056078@qq.com', '13390922939', null, null, null);
INSERT INTO `wv_user` VALUES ('62', 'superman', '1314520', '904202099@qq.com', '12345678910', null, null, null);
INSERT INTO `wv_user` VALUES ('63', 'tom222', '123456', '1@163.com', '13456789012', null, null, null);
INSERT INTO `wv_user` VALUES ('64', 'tom1234', '123456', '2@163.com', '13423456789', null, null, null);
INSERT INTO `wv_user` VALUES ('65', 'Liyu123', 'asd8520', '812544715@qq.com', '18911743412', null, '左天', '1');
INSERT INTO `wv_user` VALUES ('66', 'Liyu123', 'asd8520', '812544715@qq.com', '18911743412', null, null, null);
INSERT INTO `wv_user` VALUES ('67', '李白李白', '123456', '125365@163.com', '13986273022', null, null, null);
INSERT INTO `wv_user` VALUES ('68', 'dingdong', '123456', '15194898156@qq.com', '15112316516', null, null, null);
INSERT INTO `wv_user` VALUES ('69', 'wenjinhua', '236239', '461677613@qq.com', '13516574786', null, null, null);
INSERT INTO `wv_user` VALUES ('70', 'thebigleg', '1a4b2c8d5e7f', '1352951609@qq.com', '13572508752', null, null, null);
INSERT INTO `wv_user` VALUES ('71', 'zhangsan', 'add123456', 'add@qq.com', '12234324223', null, null, null);
INSERT INTO `wv_user` VALUES ('72', '高渐离', '123456', '935263676@qq.com', '18352501250', null, null, null);
INSERT INTO `wv_user` VALUES ('73', 'lifan', '123456', '18092034652@163.com', '18092933456', null, null, null);
INSERT INTO `wv_user` VALUES ('74', 'zhangsan99', '123456zs', '876987366@qq.com', '13934721892', null, null, null);
INSERT INTO `wv_user` VALUES ('75', 'tingDING', '123456', '12345678@qq.com', '13548525468', null, null, null);
INSERT INTO `wv_user` VALUES ('76', 'dongdong', '123456', 'wenhua@taqobao.com', '13946585968', null, null, null);
INSERT INTO `wv_user` VALUES ('77', 'weiyiwei', '123456', '598475405@qq.com', '15923741956', null, '韦祎伟', '1');
INSERT INTO `wv_user` VALUES ('78', '落英缤纷赋酒诗', 'sAberTime050', '857464657@qq.com', '17727420979', null, null, null);
INSERT INTO `wv_user` VALUES ('79', 'xiaoming1234', '123456', '4564564564@qq.com', '15269188535', null, null, null);
INSERT INTO `wv_user` VALUES ('80', 'loonchao', '123456', '850248873@qq.com', '13548729051', null, null, null);
INSERT INTO `wv_user` VALUES ('81', 'hushuang', '123456', '850248813@qq.com', '15802507525', null, null, null);
INSERT INTO `wv_user` VALUES ('82', 'test713', '2017713', '12458148@qq.com', '13596542654', null, null, null);
INSERT INTO `wv_user` VALUES ('83', 'fhr9588', '000009588', '111111111@qq.com', '12345666666', null, null, null);
INSERT INTO `wv_user` VALUES ('84', 'baibaidexue', '13809024377', '408130701@qq.com', '18301973827', null, null, null);
INSERT INTO `wv_user` VALUES ('85', 'tom10', '123456', '123@163.com', '12323456', null, null, null);
INSERT INTO `wv_user` VALUES ('86', '12121', '121212', '516898@qq.com', '15163222922', null, null, null);
INSERT INTO `wv_user` VALUES ('87', 'qwer', 'qwer123', '519808982@qq.com', '15163222923', null, null, null);
INSERT INTO `wv_user` VALUES ('88', '芳芳。。', '111111', '627265@qq.com', '17704622223', null, null, null);
INSERT INTO `wv_user` VALUES ('89', 'smm123456', '963852741', '974255093@qq.com', '15098807312', null, null, null);
INSERT INTO `wv_user` VALUES ('90', 'wenhua.Li', 'libenka', 'wenhua.li@tedu.cn', '13912345678', null, null, null);
#轮播表
DROP TABLE IF EXISTS `wv_index_carousel`;
CREATE TABLE `wv_index_carousel` (
  `cid` int(11) PRIMARY KEY auto_increment,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL
);
#插入轮播表信息
INSERT INTO `wv_index_carousel` VALUES ('1', '/project1/imgs/index/b1.jpg', '轮播广告商品1', 'product_details.html?lid=28');
INSERT INTO `wv_index_carousel` VALUES ('2', '/project1/imgs/index/b2.jpg', '轮播广告商品2', 'product_details.html?lid=19');
INSERT INTO `wv_index_carousel` VALUES ('3', '/project1/imgs/index/b3.jpg', '轮播广告商品3', 'lookforward.html');
INSERT INTO `wv_index_carousel` VALUES ('4', '/project1/imgs/index/b4.jpg', '轮播广告商品4', 'lookforward.html');
INSERT INTO `wv_index_carousel` VALUES ('5', '/project1/imgs/index/b5.jpg', '轮播广告商品5', 'lookforward.html');
INSERT INTO `wv_index_carousel` VALUES ('6', '/project1/imgs/index/b6.jpg', '轮播广告商品6', 'lookforward.html');
INSERT INTO `wv_index_carousel` VALUES ('7', '/project1/imgs/index/b7.jpg', '轮播广告商品6', 'lookforward.html');
#近期推荐表
DROP TABLE IF EXISTS `wv_recommend`;
CREATE TABLE `wv_recommend` (
  `cid` int(11) PRIMARY KEY auto_increment,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL
);
#插入近期表的信息
INSERT INTO `wv_recommend` VALUES ('1', '/project1/imgs/index/sample_1.jpg', '梦中婚礼Dream Wedding', 'product_details.html?lid=28');
INSERT INTO `wv_recommend` VALUES ('2', '/project1/imgs/index/sample_2.jpg', '完美假期Perfect Holiday', 'product_details.html?lid=19');
INSERT INTO `wv_recommend` VALUES ('3', '/project1/imgs/index/sample_3.jpg', '天生一对Perfect Couple', 'lookforward.html');
INSERT INTO `wv_recommend` VALUES ('4', '/project1/imgs/index/sample_4.jpg', '丛林物语Jungle Mist', 'lookforward.html');
INSERT INTO `wv_recommend` VALUES ('5', '/project1/imgs/index/sample_5.jpg', '漫步时光Walking Time', 'lookforward.html');
#在线服务套餐订单表
CREATE TABLE wv_index_product(
  sid   INT PRIMARY KEY AUTO_INCREMENT,
  s_pic VARCHAR(128) DEFAULT NULL,
  s_href  VARCHAR(128) DEFAULT NULL,
  s_price DECIMAL(7,0),
  s_title VARCHAR(16) DEFAULT NULL,
  s_summary VARCHAR(64) DEFAULT NULL,
  s_feature VARCHAR(128) DEFAULT NULL,
  sold_count	INT,
  is_onsale	BOOLEAN
);
#向服务套餐表中插入数据
INSERT INTO wv_index_product VALUES
(NULL,"/project1/imgs/index/o1.jpg","javascript:;",6999,"三亚6999套系","脉脉含情总相依，情深似海，蓝天为媒","独家高端签约基地、多条路线提供拍摄、多套礼服通选、金牌资深摄影团队、全程管家级贴心服务、量身定制高端时尚旅拍大片",1008,1),
(NULL,"/project1/imgs/index/o2.jpg","javascript:;",7999,"三亚7999套系","大海见证的爱情，风将誓言刻下，留给海浪送上祝愿","国家级景区17个景点、金牌资深摄影团队、倾力打造完美旅拍大片、一对一选片服务、不满意重拍、重拍不满意全额退款",2561,1),
(NULL,"/project1/imgs/index/o3.jpg","javascript:;",11999,"三亚11999套系","脉脉含情总相依，情深似海，蓝天为媒","堕落红尘的天堂、国家级景区、动静双影像、主题拍摄、多条路线任选一、底片全送、专属生产车间高效团队为你保障完美品质",1234,1),
(NULL,"/project1/imgs/index/o4.jpg","javascript:;",14999,"三亚14999套系","大海见证的爱情，风将誓言刻下，留给海浪送上祝愿","整体时尚造型升级,整体服装升级、整体服务升级、专属一对一用车、免费入住3天2晚三亚精品国际酒店",897,1),
(NULL,"/project1/imgs/index/o5.jpg","javascript:;",18999,"三亚18999套系","脉脉含情总相依，情深似海，蓝天为媒","分界洲岛和吉庆广场、豪华游艇、全程13个景点、专属一对一用车、赠送13个高端照片产品、免费入住3天2晚三亚精品国际酒店",647,1),
(NULL,"/project1/imgs/index/o6.jpg","javascript:;",28999,"三亚28999套系","","国家级景区、水下主题、堕落红尘的天堂、豪华游艇、全程15个景点、浪漫微电影全程创意跟拍5套服装、整体彩妆造型升级、服务升级、住宿升级、享3天2晚三亚豪华精品国际酒店",453,1),
(NULL,"/project1/imgs/index/o7.jpg","javascript:;",5999,"丽江5999套系","携手伴侣在古城中谱写一生之恋，静谧的小城见证了誓言","超高性价比、精品路线、11个景点、服装通选、专属一对一服务、满意为止",1587,1),
(NULL,"/project1/imgs/index/o8.jpg","javascript:;",6999,"丽江6999套系","携手伴侣在古城中谱写一生之恋，静谧的小城见证了誓言","完美行程、尊爵路线二选一、独家基地拍摄、24个景点、赠送制作产品晨熹八件套、送3天2晚豪华住宿、24小时接机、明星同款婚纱等3000元礼包",758,1),
(NULL,"/project1/imgs/index/o9.jpg","javascript:;",7999,"丽江7999套系","携手伴侣在古城中谱写一生之恋，静谧的小城见证了誓言","尊爵路线、独家外景基地拍摄、动静双影像、微电影创意跟拍2套服装、全程微电影导演服务",538,1),
(NULL,"/project1/imgs/index/o10.jpg","javascript:;",9999,"丽江9999套系","携手伴侣在古城中谱写一生之恋，静谧的小城见证了誓言","尊爵线路、雪山之巅、全程管家级贴心服务升级、造型升级",1842,1),
(NULL,"/project1/imgs/index/o11.jpg","javascript:;",14999,"丽江14999套系","携手伴侣在古城中谱写一生之恋，静谧的小城见证了誓言","独家基地、泸沽湖拍摄、全程14个景点拍摄、无隐形消费、服务升级、满意为止、住宿升级、尊享丽江古镇3天2晚纳西特色民宿客栈",1236,1),
(NULL,"/project1/imgs/index/o12.jpg","javascript:;",8599,"普吉岛8599套系","在安达曼海的明珠上，享受海水和天空的祝福","高端私人定制旅拍大片、完美行程、无隐形消费、专业资深摄影团队、全程专属一对一服务、满意为止、独家基地、服务升级、自带便装升级礼服即刻领取1000元大礼包售完为止",542,1),
(NULL,"/project1/imgs/index/o13.jpg","javascript:;",10999,"普吉岛10999套系","在安达曼海的明珠上，享受海水和天空的祝福","普吉岛高端私人定制旅拍大片、完美行程、无隐形消费、专业资深摄影团队、全程专属一对一服务、满意为止、多景点任选、多服装通选、创意拍摄150款专业靓照、尊享2天1晚豪华海景酒店、即刻领取1999元大礼包,售完为止",2981,1),
(NULL,"/project1/imgs/index/o14.jpg","javascript:;",16888,"日本16888套系","樱花盛开的地方，绽放爱情","金牌资深摄影团队、量身定制旅拍大片、完美行程、当天全程提供用车、拍摄景点沟通任选、全程管家式服务、专业资深摄影师全程一对一专业摄影服务、资深化妆师全程一对一专业化妆服务、满意为止、即刻抢2999元大礼包、售完即止",322,1),
(NULL,"/project1/imgs/index/o15.jpg","jabascript:;",29888,"日本29888套系","樱花盛开的地方，绽放爱情","金牌资深摄影团队、量身定制旅拍大片、完美行程、当天全程提供用车、拍摄景点沟通任选、全程管家式服务、专业资深摄影师全程一对一专业摄影服务、资深化妆师全程一对一专业化妆服务、满意为止、即刻抢2999元大礼包、售完即止",154,1),
(NULL,"/project1/imgs/index/o16.jpg","javascript:;",10999,"巴厘岛10999套系","带上挚爱踏进那个醉人的岛屿,酝酿爱情","百万新人的首选、超高性价比、完美行程、专业资深摄影团队、量身定制旅拍大片、不满意免费重拍、重拍不满意全额退款、无隐形消费、全程专属一对一服务、创意拍摄140张专业靓照、礼服通选即刻领取、2000元豪华大礼包售完为止",326,1);
#客照欣赏表
CREATE table wv_index_sample(
	ms_Id	INT PRIMARY KEY AUTO_INCREMENT,
	ms_src	VARCHAR(128) DEFAULT NULL,
	ms_href	VARCHAR(128) DEFAULT NULL
);
#向更多样照表中插入数据
INSERT INTO wv_index_sample VALUES
(NULL,"/project1/imgs/index/k1.jpg","javascript:;"),
(NULL,"/project1/imgs/index/k2.jpg","javascript:;"),
(NULL,"/project1/imgs/index/k3.jpg","javascript:;"),
(NULL,"/project1/imgs/index/k4.jpg","javascript:;"),
(NULL,"/project1/imgs/index/k5.jpg","javascript:;"),
(NULL,"/project1/imgs/index/k6.jpg","javascript:;"),
(NULL,"/project1/imgs/index/k7.jpg","javascript:;"),
(NULL,"/project1/imgs/index/k8.jpg","javascript:;"),
(NULL,"/project1/imgs/index/k9.jpg","javascript:;"),
(NULL,"/project1/imgs/index/k10.jpg","javascript:;");
