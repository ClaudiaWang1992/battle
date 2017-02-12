/*
	��̬����
*/
var SCREEN_WIDTH = 512;
var SCREEN_HEIGHT = 448;

/**************ͼƬ��Դ************/
var MENU_IMAGE = new Image();
MENU_IMAGE.src = "images/menu.gif";
var RESOURCE_IMAGE = new Image();
RESOURCE_IMAGE.src = "images/tankAll.gif";

/**************����ͼ����ͼƬ�е�λ��*********/
var POS = new Array();
POS["selectTank"] = [128,96];
POS["stageLevel"] = [396,96];
POS["num"] = [256,96];
POS["map"] = [0,96];
POS["home"] = [256,0];
POS["score"] = [0,112];
POS["player"] = [0,0];
POS["protected"] = [160,96];
POS["enemyBefore"] = [256,32];
POS["enemy1"] = [128,0];
POS["enemy2"] = [0,32];
POS["enemy3"] = [0,64];
POS["bullet"] = [80,96];
POS["tankBomb"] = [0,160];
POS["bulletBomb"] = [320,0];
POS["over"] = [384,64];
POS["prop"] = [256,110];
POS["enemyNum"]=[92,112];

/**************��Ϸ״̬*********/
var GAME_STATE_MENU = 0;
var GAME_STATE_INIT = 1;
var GAME_STATE_START = 2;
var GAME_STATE_OVER = 3;
var GAME_STATE_WIN = 4;

/**************��ͼ��*********/
var WALL = 1;
var GRID = 2;
var GRASS = 3;
var WATER = 4;
var ICE = 5;
var HOME = 9;
var CONTAIN=8;

/**************̹�˼��ӵ����ĸ�����*********/
var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;
 
var ENEMY_START = [192,0,384];

/**************�ӵ�����*********/
var BULLET_TYPE_PLAYER = 1;
var BULLET_TYPE_ENEMY = 2;

/**************��ը����*********/
var CRACK_TYPE_TANK = "tank";
var CRACK_TYPE_BULLET = "bullet";

/**************������Դ*****************/
var START_AUDIO = new Audio("audio/start.mp3");
var BULLET_DESTROY_AUDIO = new Audio("audio/bulletCrack.mp3");
var TANK_DESTROY_AUDIO = new Audio("audio/tankCrack.mp3");
var PLAYER_DESTROY_AUDIO = new Audio("audio/playerCrack.mp3");
var MOVE_AUDIO = new Audio("audio/move.mp3");
var ATTACK_AUDIO = new Audio("audio/attack.mp3");
var PROP_AUDIO = new Audio("audio/prop.mp3");