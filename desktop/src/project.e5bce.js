require=function t(e,i,o){function s(c,a){if(!i[c]){if(!e[c]){var n="function"==typeof require&&require;if(!a&&n)return n(c,!0);if(r)return r(c,!0);var h=new Error("Cannot find module '"+c+"'");throw h.code="MODULE_NOT_FOUND",h}var p=i[c]={exports:{}};e[c][0].call(p.exports,function(t){var i=e[c][1][t];return s(i||t)},p,p.exports,t,e,i,o)}return i[c].exports}for(var r="function"==typeof require&&require,c=0;c<o.length;c++)s(o[c]);return s}({GameRoot:[function(t,e,i){"use strict";cc._RF.push(e,"a370bXtLwVLZ7lyzdETAio/","GameRoot"),Object.defineProperty(i,"__esModule",{value:!0});var o=cc._decorator,s=o.ccclass,r=o.property,c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.maskPanel=null,e.messageLabel=null,e.messageBtn1=null,e.messageBtn2=null,e.tipPanel=null,e.tipLabel=null,e}return __extends(e,t),e.prototype.showMaskMessage=function(t,e,i){var o=this;this.messageLabel.string=t,this.maskPanel.active||(this.maskPanel.active=!0),e?(this.messageBtn1.active=!0,this.messageBtn1.getComponent(cc.Label).string=e.label,this.messageBtn1.once(cc.Node.EventType.TOUCH_END,function(){o.hideMaskMessage(),e.cb||e.cb()},e.target)):this.messageBtn1.active=!1,i?(this.messageBtn2.active=!0,this.messageBtn2.getComponent(cc.Label).string=i.label,this.messageBtn2.once(cc.Node.EventType.TOUCH_END,function(){o.hideMaskMessage(),i.cb||i.cb()},i.target)):this.messageBtn2.active=!1},e.prototype.hideMaskMessage=function(){this.maskPanel.active=!1},e.prototype.showTip=function(t){this.tipLabel.string=t,this.tipPanel.getComponent(cc.Animation).play()},__decorate([r(cc.Node)],e.prototype,"maskPanel",void 0),__decorate([r(cc.Label)],e.prototype,"messageLabel",void 0),__decorate([r(cc.Node)],e.prototype,"messageBtn1",void 0),__decorate([r(cc.Node)],e.prototype,"messageBtn2",void 0),__decorate([r(cc.Node)],e.prototype,"tipPanel",void 0),__decorate([r(cc.Label)],e.prototype,"tipLabel",void 0),e=__decorate([s],e)}(cc.Component);i.GameRoot=c,cc._RF.pop()},{}],GobangAI:[function(t,e,i){"use strict";cc._RF.push(e,"718e4R2i4ZJIo5PjMMgEagd","GobangAI"),Object.defineProperty(i,"__esModule",{value:!0});var o=t("./GobangConstants"),s=function(){function t(t){this.board=t,this.fiveGroup=[],this.fiveGroupScore=[];for(o=0;o<15;o++)for(e=0;e<11;e++)this.fiveGroup.push([cc.v2(e,o),cc.v2(e+1,o),cc.v2(e+2,o),cc.v2(e+3,o),cc.v2(e+4,o)]);for(e=0;e<15;e++)for(o=0;o<11;o++)this.fiveGroup.push([cc.v2(e,o),cc.v2(e,o+1),cc.v2(e,o+2),cc.v2(e,o+3),cc.v2(e,o+4)]);for(i=-10;i<=10;i++)for(var e=0;e<11;e++)i+e<0||i+e>10||this.fiveGroup.push([cc.v2(e,i+e),cc.v2(e+1,i+e+1),cc.v2(e+2,i+e+2),cc.v2(e+3,i+e+3),cc.v2(e+4,i+e+4)]);for(var i=4;i<=24;i++)for(var o=0;o<11;o++)i-o<4||i-o>14||this.fiveGroup.push([cc.v2(i-o,o),cc.v2(i-o-1,o+1),cc.v2(i-o-2,o+2),cc.v2(i-o-3,o+3),cc.v2(i-o-4,o+4)])}return t.prototype.getNextCoor=function(){this.board.pieceMap;for(c=0;c<this.fiveGroup.length;c++){for(var t=0,e=0,i=0;i<5;i++)this.board.getPieceByCoor(this.fiveGroup[c][i]).color===o.BLACK?t++:this.board.getPieceByCoor(this.fiveGroup[c][i]).color===o.WHITE&&e++;t+e==0?this.fiveGroupScore[c]=7:t>0&&e>0?this.fiveGroupScore[c]=0:0==t&&1==e?this.fiveGroupScore[c]=35:0==t&&2==e?this.fiveGroupScore[c]=800:0==t&&3==e?this.fiveGroupScore[c]=15e3:0==t&&4==e?this.fiveGroupScore[c]=8e5:0==e&&1==t?this.fiveGroupScore[c]=15:0==e&&2==t?this.fiveGroupScore[c]=400:0==e&&3==t?this.fiveGroupScore[c]=1800:0==e&&4==t&&(this.fiveGroupScore[c]=1e5)}for(var s=0,r=0,c=0;c<this.fiveGroupScore.length;c++)this.fiveGroupScore[c]>s&&(s=this.fiveGroupScore[c],r=c);for(var a=!1,n=!1,h=0,c=0;c<5;c++)if(a||this.board.getPieceByCoor(this.fiveGroup[r][c]).color!==o.NONE||(h=c),n||this.board.getPieceByCoor(this.fiveGroup[r][c]).color===o.NONE||(a=!0,n=!0),n&&this.board.getPieceByCoor(this.fiveGroup[r][c]).color===o.NONE){h=c;break}return this.fiveGroup[r][h]},t}();i.GobangAI=s,cc._RF.pop()},{"./GobangConstants":"GobangConstants"}],GobangBoard:[function(t,e,i){"use strict";cc._RF.push(e,"0c537hphVJHQ529UlnH6eF9","GobangBoard"),Object.defineProperty(i,"__esModule",{value:!0});var o=t("./GobangConstants"),s=t("./GobangPiece"),r=cc._decorator,c=r.ccclass,a=r.property,n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.colsSum=15,e.rowsSum=15,e.graphics=null,e.graphics2=null,e.tileWidth=0,e.startX=0,e.startY=0,e.boardWidth=0,e.boardHeight=0,e.lastPiece=null,e.gobangScene=null,e}return __extends(e,t),e.prototype.init=function(t){this.gobangScene=t,this.tileWidth=this.node.width/this.colsSum,this.startX=this.tileWidth/2,this.startY=this.tileWidth/2,this.boardWidth=this.tileWidth*(this.colsSum-1),this.boardHeight=this.tileWidth*(this.rowsSum-1),this.reset(),this.addListeners()},e.prototype.reset=function(){this.graphics.clear(),this.graphics2.clear(),this.graphics.strokeColor=cc.Color.BLACK;for(r=0;r<this.colsSum;r++)this.graphics.moveTo(this.startX+r*this.tileWidth,this.startY),this.graphics.lineTo(this.startX+r*this.tileWidth,this.startY+this.boardHeight),this.graphics.stroke();for(i=0;i<this.rowsSum;i++)this.graphics.moveTo(this.startX,this.startY+i*this.tileWidth),this.graphics.lineTo(this.startX+this.boardWidth,this.startY+i*this.tileWidth),this.graphics.stroke();this.graphics.strokeColor=cc.Color.RED,this.graphics.fillColor=cc.Color.RED;var t=Math.floor(this.colsSum/2),e=Math.floor(this.rowsSum/2);this.graphics.circle(this.startX+t*this.tileWidth,this.startY+e*this.tileWidth,5),this.graphics.fill(),this.pieceMap=[];for(var i=0;i<this.rowsSum;i++){this.pieceMap[i]=[];for(var r=0;r<this.colsSum;r++)this.pieceMap[i][r]=new s.GobangPiece(r,i,o.NONE)}},e.prototype.drawLastPieceRect=function(){this.graphics2.clear(),this.lastPiece&&(this.graphics2.strokeColor=cc.Color.RED,this.graphics2.rect(this.startX+this.tileWidth*this.lastPiece.x-this.tileWidth/2,this.startY+this.tileWidth*this.lastPiece.y-this.tileWidth/2,this.tileWidth,this.tileWidth),this.graphics2.stroke())},e.prototype.placeBlack=function(t){this.graphics.strokeColor=cc.Color.BLACK,this.graphics.fillColor=cc.Color.BLACK,this.graphics.circle(this.startX+t.x*this.tileWidth,this.startY+t.y*this.tileWidth,.45*this.tileWidth),this.graphics.fill(),this.pieceMap[t.x][t.y]=new s.GobangPiece(t.x,t.y,o.BLACK),this.lastPiece=this.pieceMap[t.x][t.y],this.drawLastPieceRect()},e.prototype.placeWhite=function(t){this.graphics.strokeColor=cc.Color.WHITE,this.graphics.fillColor=cc.Color.WHITE,this.graphics.circle(this.startX+t.x*this.tileWidth,this.startY+t.y*this.tileWidth,.45*this.tileWidth),this.graphics.fill(),this.pieceMap[t.x][t.y]=new s.GobangPiece(t.x,t.y,o.WHITE),this.lastPiece=this.pieceMap[t.x][t.y],this.drawLastPieceRect()},e.prototype.getPieceByCoor=function(t){return this.pieceMap[t.x][t.y]},e.prototype.onTouched=function(t){var e=this.node.convertToNodeSpaceAR(t.getLocation()),i=this.getCoorByPos(e);this.gobangScene.onBoardTouched(i)},e.prototype.getCoorByPos=function(t){var e=Math.round((t.x-this.startX)/this.tileWidth),i=Math.round((t.y-this.startY)/this.tileWidth);return cc.v2(e,i)},e.prototype.judgeWin=function(){for(var t=0,e=0;e<this.colsSum;e++)if(this.pieceMap[e][this.lastPiece.y].color===this.lastPiece.color){if(5==++t)return!0}else t=0;t=0;for(var i=0;i<this.rowsSum;i++)if(this.pieceMap[this.lastPiece.x][i].color===this.lastPiece.color){if(5==++t)return!0}else t=0;var o=this.lastPiece.y-this.lastPiece.x;t=0;for(e=0;e<this.colsSum;e++)if(!(o+e<0||o+e>=this.rowsSum))if(this.pieceMap[e][o+e].color===this.lastPiece.color){if(5==++t)return!0}else t=0;o=this.lastPiece.y+this.lastPiece.x,t=0;for(e=0;e<15;e++)if(!(o-e<0||o-e>=this.rowsSum))if(this.pieceMap[e][o-e].color===this.lastPiece.color){if(5==++t)return!0}else t=0;return!1},e.prototype.addListeners=function(){this.node.on(cc.Node.EventType.TOUCH_END,this.onTouched,this)},e.prototype.removeListeners=function(){},__decorate([a(cc.Integer)],e.prototype,"colsSum",void 0),__decorate([a(cc.Integer)],e.prototype,"rowsSum",void 0),__decorate([a(cc.Graphics)],e.prototype,"graphics",void 0),__decorate([a(cc.Graphics)],e.prototype,"graphics2",void 0),e=__decorate([c],e)}(cc.Component);i.GobangBoard=n,cc._RF.pop()},{"./GobangConstants":"GobangConstants","./GobangPiece":"GobangPiece"}],GobangConstants:[function(t,e,i){"use strict";cc._RF.push(e,"4d1454ZxfBKuoBi2bCCS2eB","GobangConstants"),Object.defineProperty(i,"__esModule",{value:!0}),i.NONE=0,i.BLACK=1,i.WHITE=2,cc._RF.pop()},{}],GobangPiece:[function(t,e,i){"use strict";cc._RF.push(e,"b1aa3dPul9JxbYweTzmBe9T","GobangPiece"),Object.defineProperty(i,"__esModule",{value:!0});var o=function(){return function(t,e,i){this.x=t,this.y=e,this.color=i}}();i.GobangPiece=o,cc._RF.pop()},{}],GobangScene:[function(t,e,i){"use strict";cc._RF.push(e,"2fcd3v+r05H8q3UVtZU7Lkf","GobangScene"),Object.defineProperty(i,"__esModule",{value:!0});var o=t("./GobangBoard"),s=t("./GobangConstants"),r=t("./GobangAI"),c=t("../G"),a=cc._decorator,n=a.ccclass,h=a.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.board=null,e.ai=null,e.state=s.NONE,e}return __extends(e,t),e.prototype.start=function(){this.board.init(this),this.ai=new r.GobangAI(this.board),this.startGame()},e.prototype.startGame=function(){this.state=s.BLACK,this.board.reset(),c.G.gameRoot.showTip("你是黑棋你先走")},e.prototype.overGame=function(){this.state===s.BLACK?(cc.log("黑棋胜"),this.state=s.NONE,c.G.gameRoot.showMaskMessage("你赢了阿尔法二狗！",{label:"朕知道了",cb:function(){},target:this})):this.state===s.WHITE&&(cc.log("白旗胜"),c.G.gameRoot.showMaskMessage("你输给了阿尔法二狗！",{label:"服了",cb:function(){},target:this},{label:"不服",cb:function(){},target:this}),this.state=s.NONE)},e.prototype.onBtnReturn=function(){c.G.returnHall()},e.prototype.onBtnRestart=function(){this.startGame()},e.prototype.onBoardTouched=function(t){var e=this;switch(this.state){case s.NONE:break;case s.BLACK:if(this.board.getPieceByCoor(t).color!==s.NONE)return void c.G.gameRoot.showTip("这里有子了，你是不是傻");this.board.placeBlack(t),this.board.judgeWin()?this.overGame():(this.state=s.WHITE,this.scheduleOnce(function(){e.board.placeWhite(e.ai.getNextCoor()),e.board.judgeWin()?e.overGame():e.state=s.BLACK},1));break;case s.WHITE:}},__decorate([h(o.GobangBoard)],e.prototype,"board",void 0),e=__decorate([n],e)}(cc.Component);i.GobangScene=p,cc._RF.pop()},{"../G":"G","./GobangAI":"GobangAI","./GobangBoard":"GobangBoard","./GobangConstants":"GobangConstants"}],G:[function(t,e,i){"use strict";cc._RF.push(e,"409bcMsMydAJKg/yHU4OEJk","G"),Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function t(){this.gameRoot=null}return t.prototype.enterHall=function(){cc.director.loadScene("hall")},t.prototype.returnHall=function(){cc.director.loadScene("hall")},t.prototype.enterGobang=function(){this.loadSceneWithProgress("gobang")},t.prototype.enterReversi=function(){this.loadSceneWithProgress("reversi")},t.prototype.enter2048=function(){this.loadSceneWithProgress("2048")},t.prototype.setLoadingDisplay=function(){if(!cc.sys.isNative){var t=document.getElementById("splash"),e=t.querySelector(".progress-bar span");cc.loader.onProgress=function(t,i,o){var s=100*t/i;e&&(e.style.width=s.toFixed(2)+"%")},t.style.display="block",e.style.width="0%",cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH,function(){t.style.display="none"})}},t.prototype.loadSceneWithProgress=function(t,e){this.setLoadingDisplay(),cc.director.preloadScene(t,function(){setTimeout(function(){cc.director.loadScene(t,e)},1e3)})},t.Instance=new t,t}();i.G=o.Instance,cc._RF.pop()},{}],HallScene:[function(t,e,i){"use strict";cc._RF.push(e,"fd226wRnxRPpLNRLPUta677","HallScene"),Object.defineProperty(i,"__esModule",{value:!0});var o=t("../G"),s=cc._decorator,r=s.ccclass,c=(s.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.onBtnGobang=function(){o.G.enterGobang()},e.prototype.onBtnReversi=function(){o.G.enterReversi()},e.prototype.onBtn2048=function(){o.G.enter2048()},e=__decorate([r],e)}(cc.Component));i.HallScene=c,cc._RF.pop()},{"../G":"G"}],LodingScene:[function(t,e,i){"use strict";cc._RF.push(e,"118a2LRWWBIKY9afEfjWW/h","LodingScene"),Object.defineProperty(i,"__esModule",{value:!0});var o=t("../G"),s=t("../shared/GameRoot"),r=cc._decorator,c=r.ccclass,a=r.property,n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tipLabel=null,e.gameRoot=null,e}return __extends(e,t),e.prototype.onLoad=function(){cc.game.addPersistRootNode(this.gameRoot),this.initGlobal()},e.prototype.initGlobal=function(){o.G.gameRoot=this.gameRoot.getComponent(s.GameRoot)},e.prototype.start=function(){var t=this;cc.director.setDisplayStats(!1);var e="始终相信美好的事情不会发生",i=0;this.tipLabel.string="",this.schedule(function(){++i===e.length+1?t.onLoadSuccess():t.tipLabel.string=e.substring(0,i)},.3,e.length+1,.3)},e.prototype.onLoadSuccess=function(){o.G.enterHall()},__decorate([a(cc.Label)],e.prototype,"tipLabel",void 0),__decorate([a(cc.Node)],e.prototype,"gameRoot",void 0),e=__decorate([c],e)}(cc.Component);i.LodingScene=n,cc._RF.pop()},{"../G":"G","../shared/GameRoot":"GameRoot"}],M2048Board:[function(t,e,i){"use strict";cc._RF.push(e,"8daa0Je3Z9NaKuqNJt/x5E8","M2048Board"),Object.defineProperty(i,"__esModule",{value:!0});var o=t("./M2048Piece"),s=t("./M2048Constants"),r=cc._decorator,c=r.ccclass,a=r.property,n=r.executeInEditMode,h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.colsSum=4,e.rowsSum=4,e.graphics=null,e.piecePrefab=null,e.pieceLayer=null,e.tileWidth=0,e.startX=0,e.startY=0,e.boardWidth=0,e.boardHeight=0,e.m2048Scene=null,e}return __extends(e,t),e.prototype.onLoad=function(){this.tileWidth=this.node.width/(this.colsSum+1),this.startX=this.tileWidth/2,this.startY=this.tileWidth/2,this.boardWidth=this.tileWidth*this.colsSum,this.boardHeight=this.tileWidth*this.rowsSum,this.graphics.clear(),this.graphics.strokeColor=cc.Color.BLACK;for(t=0;t<this.colsSum+1;t++)this.graphics.moveTo(this.startX+t*this.tileWidth,this.startY),this.graphics.lineTo(this.startX+t*this.tileWidth,this.startY+this.boardHeight),this.graphics.stroke();for(e=0;e<this.rowsSum+1;e++)this.graphics.moveTo(this.startX,this.startY+e*this.tileWidth),this.graphics.lineTo(this.startX+this.boardWidth,this.startY+e*this.tileWidth),this.graphics.stroke();this.pieceLayer.removeAllChildren(),this.pieceMap=[];for(var t=0;t<this.colsSum;t++){this.pieceMap[t]=[];for(var e=0;e<this.rowsSum;e++){var i=cc.instantiate(this.piecePrefab).getComponent(o.M2048Piece);i.node.parent=this.pieceLayer,i.node.x=this.startX+t*this.tileWidth+this.tileWidth/2,i.node.y=this.startY+e*this.tileWidth+this.tileWidth/2,this.pieceMap[t][e]=i,i.init(t,t,0)}}},e.prototype.init=function(t){this.m2048Scene=t,this.reset(),this.addListeners()},e.prototype.reset=function(){for(var t=0;t<this.colsSum;t++)for(var e=0;e<this.rowsSum;e++)this.pieceMap[t][e].n=0;for(var i=0;i<2;i++)this.newPiece()},e.prototype.newPiece=function(){for(var t=[],e=0;e<this.colsSum;e++)for(var i=0;i<this.rowsSum;i++)0===this.pieceMap[e][i].n&&t.push(this.pieceMap[e][i]);t[Math.floor(Math.random()*t.length)].randomNumber()},e.prototype.judgeOver=function(){for(var t=0;t<this.rowsSum;t++)for(var e=0;e<this.colsSum;e++){if(0===this.pieceMap[e][t].n)return!1;if(e<=this.colsSum-2&&this.pieceMap[e][t].n===this.pieceMap[e+1][t].n)return!1;if(t<=this.rowsSum-2&&this.pieceMap[e][t].n===this.pieceMap[e][t+1].n)return!1}return!0},e.prototype.getMaxNLabel=function(){for(var t=2,e="2",i=0;i<this.colsSum;i++)for(var o=0;o<this.rowsSum;o++)this.pieceMap[i][o].n>t&&(t=this.pieceMap[i][o].n,e=this.pieceMap[i][o].nLabel.string);return e},e.prototype.slideLeft=function(){for(var t=!1,e=0;e<this.rowsSum;e++)for(i=0;i<this.colsSum;i++)if(0!==this.pieceMap[i][e].n)for(o=i+1;o<this.colsSum;o++)if(0!==this.pieceMap[o][e].n){if(this.pieceMap[i][e].n===this.pieceMap[o][e].n){this.pieceMap[i][e].n*=2,this.pieceMap[o][e].n=0,t=!0;break}break}for(e=0;e<this.rowsSum;e++)for(var i=0;i<this.colsSum;i++)if(0===this.pieceMap[i][e].n)for(var o=i+1;o<this.rowsSum;o++)if(0!==this.pieceMap[o][e].n){this.pieceMap[i][e].n=this.pieceMap[o][e].n,this.pieceMap[o][e].n=0,t=!0;break}return t&&this.newPiece(),t},e.prototype.slideRight=function(){for(var t=!1,e=0;e<this.rowsSum;e++)for(i=this.colsSum-1;i>=0;i--)if(0!==this.pieceMap[i][e].n)for(o=i-1;o>=0;o--)if(0!==this.pieceMap[o][e].n){if(this.pieceMap[i][e].n===this.pieceMap[o][e].n){this.pieceMap[i][e].n=2*this.pieceMap[i][e].n,this.pieceMap[o][e].n=0,t=!0;break}break}for(e=0;e<this.rowsSum;e++)for(var i=this.colsSum-1;i>=0;i--)if(0===this.pieceMap[i][e].n)for(var o=i-1;o>=0;o--)if(0!==this.pieceMap[o][e].n){this.pieceMap[i][e].n=this.pieceMap[o][e].n,this.pieceMap[o][e].n=0,t=!0;break}return t&&this.newPiece(),t},e.prototype.slideDown=function(){for(var t=!1,e=0;e<this.colsSum;e++)for(i=0;i<this.rowsSum;i++)if(0!==this.pieceMap[e][i].n)for(o=i+1;o<4;o++)if(0!==this.pieceMap[e][o].n){if(this.pieceMap[e][i].n===this.pieceMap[e][o].n){this.pieceMap[e][i].n=2*this.pieceMap[e][i].n,this.pieceMap[e][o].n=0,t=!0;break}break}for(e=0;e<this.colsSum;e++)for(var i=0;i<this.rowsSum;i++)if(0===this.pieceMap[e][i].n)for(var o=i+1;o<this.rowsSum;o++)if(0!==this.pieceMap[e][o].n){this.pieceMap[e][i].n=this.pieceMap[e][o].n,this.pieceMap[e][o].n=0,t=!0;break}return t&&this.newPiece(),t},e.prototype.slideUp=function(){for(var t=!1,e=0;e<this.colsSum;e++)for(i=this.rowsSum-1;i>=0;i--)if(0!==this.pieceMap[e][i].n)for(o=i-1;o>=0;o--)if(0!==this.pieceMap[e][o].n){if(this.pieceMap[e][i].n===this.pieceMap[e][o].n){this.pieceMap[e][i].n=2*this.pieceMap[e][i].n,this.pieceMap[e][o].n=0,t=!0;break}break}for(e=0;e<this.colsSum;e++)for(var i=this.rowsSum-1;i>=0;i--)if(0==this.pieceMap[e][i].n)for(var o=i-1;o>=0;o--)if(0!=this.pieceMap[e][o].n){this.pieceMap[e][i].n=this.pieceMap[e][o].n,this.pieceMap[e][o].n=0,t=!0;break}return t&&this.newPiece(),t},e.prototype.onTouched=function(t){var e=t.getStartLocation(),i=t.getLocation(),o=i.x-e.x,r=i.y-e.y;Math.abs(o)>Math.abs(r)?o>40?this.m2048Scene.onBoardSlid(s.DIR.RIGHT):o<-40&&this.m2048Scene.onBoardSlid(s.DIR.LEFT):r>40?this.m2048Scene.onBoardSlid(s.DIR.UP):r<-40&&this.m2048Scene.onBoardSlid(s.DIR.DOWN)},e.prototype.onKey=function(t){switch(t.keyCode){case cc.KEY.up:case cc.KEY.w:this.m2048Scene.onBoardSlid(s.DIR.UP);break;case cc.KEY.down:case cc.KEY.s:this.m2048Scene.onBoardSlid(s.DIR.DOWN);break;case cc.KEY.left:case cc.KEY.a:this.m2048Scene.onBoardSlid(s.DIR.LEFT);break;case cc.KEY.right:case cc.KEY.d:this.m2048Scene.onBoardSlid(s.DIR.RIGHT)}},e.prototype.addListeners=function(){this.node.on(cc.Node.EventType.TOUCH_END,this.onTouched,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKey,this)},e.prototype.removeListeners=function(){cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKey,this)},__decorate([a(cc.Integer)],e.prototype,"colsSum",void 0),__decorate([a(cc.Integer)],e.prototype,"rowsSum",void 0),__decorate([a(cc.Graphics)],e.prototype,"graphics",void 0),__decorate([a(cc.Prefab)],e.prototype,"piecePrefab",void 0),__decorate([a(cc.Node)],e.prototype,"pieceLayer",void 0),e=__decorate([c,n],e)}(cc.Component);i.M2048Board=h,cc._RF.pop()},{"./M2048Constants":"M2048Constants","./M2048Piece":"M2048Piece"}],M2048Constants:[function(t,e,i){"use strict";cc._RF.push(e,"ae1feSJm35PO7NFsru97cE/","M2048Constants"),Object.defineProperty(i,"__esModule",{value:!0});!function(t){t[t.LEFT=1]="LEFT",t[t.UP=2]="UP",t[t.RIGHT=3]="RIGHT",t[t.DOWN=4]="DOWN"}(i.DIR||(i.DIR={}));!function(t){t[t.NONE=0]="NONE",t[t.START=1]="START",t[t.OVER=2]="OVER"}(i.STATE||(i.STATE={})),cc._RF.pop()},{}],M2048Piece:[function(t,e,i){"use strict";cc._RF.push(e,"cb9b4J96u9N86ZDPdyznPbw","M2048Piece"),Object.defineProperty(i,"__esModule",{value:!0});var o=cc._decorator,s=o.ccclass,r=o.property,c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.nLabel=null,e._n=0,e}return __extends(e,t),Object.defineProperty(e.prototype,"n",{get:function(){return this._n},set:function(t){this._n=t;var e,i;switch(t){case 0:i="",e=cc.Color.BLACK;break;case 2:i="幼儿园",e=cc.hexToColor("#784212");break;case 4:i="小学生",e=cc.hexToColor("#784212");break;case 8:i="初中生",e=cc.hexToColor("#7E5109");break;case 16:i="高中生",e=cc.hexToColor("#7D6608");break;case 32:i="大学生",e=cc.hexToColor("#186A3B");break;case 64:i="研究生",e=cc.hexToColor("#145A32");break;case 128:i="硕士生",e=cc.hexToColor("#0B5345");break;case 256:i="博士生",e=cc.hexToColor("#0E6251");break;case 512:i="实习生",e=cc.hexToColor("#1B4F72");break;case 1024:i="码农",e=cc.hexToColor("#154360");break;case 2048:i="码神",e=cc.hexToColor("#4A235A");break;case 4096:i="女装大佬",e=cc.hexToColor("#512E5F");break;case 8192:i="众生平等",e=cc.hexToColor("#78281F");break;default:i="开挂吧你",e=cc.hexToColor("#641E16")}this.nLabel.string=i,this.nLabel.node.color=e},enumerable:!0,configurable:!0}),e.prototype.init=function(t,e,i){this.x=t,this.y=e,this.n=i},e.prototype.randomNumber=function(){this.n=Math.random()<.9?2:4},e.prototype.getHcolor=function(t,e){var i=e/6,o=0,s=0,r=0,c=0;return t<1*i?(o=t/i*255,s=255,r=0,c=Math.round(o)):t>=i&&t<2*i?(o=255-(t-i)/i*255,s=Math.round(o),r=0,c=255):t>=2*i&&t<3*i?(o=(t-2*i)/i*255,s=0,r=Math.round(o),c=255):t>=3*i&&t<4*i?(o=255-(t-3*i)/i*255,s=0,r=255,c=Math.round(o)):t>=4*i&&t<5*i?(o=(t-4*i)/i*255,s=Math.round(o),r=255,c=0):(o=255-(t-5*i)/i*255,s=255,r=Math.round(o),c=0),cc.color(s,r,c)},__decorate([r(cc.Label)],e.prototype,"nLabel",void 0),e=__decorate([s],e)}(cc.Component);i.M2048Piece=c,cc._RF.pop()},{}],M2048Scene:[function(t,e,i){"use strict";cc._RF.push(e,"d6ad1DvUutCO5e9tw6UJExv","M2048Scene"),Object.defineProperty(i,"__esModule",{value:!0});var o=t("./M2048Board"),s=t("../G"),r=t("./M2048Constants"),c=cc._decorator,a=c.ccclass,n=c.property,h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.board=null,e.state=r.STATE.NONE,e}return __extends(e,t),e.prototype.start=function(){this.board.init(this),this.startGame()},e.prototype.startGame=function(){this.state=r.STATE.START,this.board.reset(),s.G.gameRoot.showTip("四方向手势滑动")},e.prototype.overGame=function(){var t=this.board.getMaxNLabel();s.G.gameRoot.showMaskMessage(t,{label:"朕知道了",cb:function(){},target:this}),this.state=r.STATE.OVER},e.prototype.onBtnReturn=function(){s.G.returnHall()},e.prototype.onBtnRestart=function(){this.startGame()},e.prototype.onBoardSlid=function(t){var e=!1;switch(t){case r.DIR.LEFT:e=this.board.slideLeft();break;case r.DIR.RIGHT:e=this.board.slideRight();break;case r.DIR.UP:e=this.board.slideUp();break;case r.DIR.DOWN:e=this.board.slideDown();break;default:cc.error("方向错误")}e&&this.board.judgeOver()&&this.overGame()},__decorate([n(o.M2048Board)],e.prototype,"board",void 0),e=__decorate([a],e)}(cc.Component);i.M2048Scene=h,cc._RF.pop()},{"../G":"G","./M2048Board":"M2048Board","./M2048Constants":"M2048Constants"}],ReversiAI:[function(t,e,i){"use strict";cc._RF.push(e,"f554edBfB9EGb5YaGb6mEq/","ReversiAI"),Object.defineProperty(i,"__esModule",{value:!0});var o=t("./ReversiConstants"),s=function(){function t(t){this.board=t}return t.prototype.getNextCoor=function(){for(var t=[],e=0;e<this.board.pieceMap.length;e++)for(var i=0;i<this.board.pieceMap[e].length;i++)if(this.board.pieceMap[e][i].color===o.NONE&&this.board.canPlace(o.WHITE,cc.v2(e,i))){if(0===e||0===i||e===this.board.pieceMap.length-1||i===this.board.pieceMap[e].length-1)return cc.v2(e,i);t.push(cc.v2(e,i))}return t[Math.floor(Math.random()*t.length)]},t}();i.ReversiAI=s,cc._RF.pop()},{"./ReversiConstants":"ReversiConstants"}],ReversiBoard:[function(t,e,i){"use strict";cc._RF.push(e,"80923WSrblNDr5l6s/fRBrL","ReversiBoard"),Object.defineProperty(i,"__esModule",{value:!0});var o=t("./ReversiPiece"),s=t("./ReversiConstants"),r=cc._decorator,c=r.ccclass,a=r.property,n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.colsSum=8,e.rowsSum=8,e.graphics=null,e.graphics2=null,e.tileWidth=0,e.startX=0,e.startY=0,e.boardWidth=0,e.boardHeight=0,e.lastPiece=null,e.reversiScene=null,e}return __extends(e,t),e.prototype.init=function(t){this.reversiScene=t,this.tileWidth=this.node.width/(this.colsSum+1),this.startX=this.tileWidth/2,this.startY=this.tileWidth/2,this.boardWidth=this.tileWidth*this.colsSum,this.boardHeight=this.tileWidth*this.rowsSum,this.reset(),this.addListeners()},e.prototype.reset=function(){this.graphics.clear(),this.graphics2.clear(),this.graphics.strokeColor=cc.Color.BLACK;for(t=0;t<this.colsSum+1;t++)this.graphics.moveTo(this.startX+t*this.tileWidth,this.startY),this.graphics.lineTo(this.startX+t*this.tileWidth,this.startY+this.boardHeight),this.graphics.stroke();for(e=0;e<this.rowsSum+1;e++)this.graphics.moveTo(this.startX,this.startY+e*this.tileWidth),this.graphics.lineTo(this.startX+this.boardWidth,this.startY+e*this.tileWidth),this.graphics.stroke();this.pieceMap=[];for(var t=0;t<this.colsSum;t++){this.pieceMap[t]=[];for(var e=0;e<this.rowsSum;e++)this.pieceMap[t][e]=new o.ReversiPiece(t,e,s.NONE)}this.placeBlack(cc.v2(Math.floor(this.colsSum/2)-1,Math.floor(this.rowsSum/2)-1)),this.placeBlack(cc.v2(Math.floor(this.colsSum/2),Math.floor(this.rowsSum/2))),this.placeWhite(cc.v2(cc.v2(Math.floor(this.colsSum/2)-1,Math.floor(this.rowsSum/2)))),this.placeWhite(cc.v2(cc.v2(Math.floor(this.colsSum/2),Math.floor(this.rowsSum/2)-1)))},e.prototype.refresh=function(){this.graphics2.clear();for(var t=0;t<this.colsSum;t++)for(var e=0;e<this.rowsSum;e++)this.pieceMap[t][e].color===s.BLACK?(this.graphics2.strokeColor=cc.Color.BLACK,this.graphics2.fillColor=cc.Color.BLACK,this.graphics2.circle(this.startX+t*this.tileWidth+this.tileWidth/2,this.startY+e*this.tileWidth+this.tileWidth/2,.45*this.tileWidth),this.graphics2.fill()):this.pieceMap[t][e].color===s.WHITE&&(this.graphics2.strokeColor=cc.Color.WHITE,this.graphics2.fillColor=cc.Color.WHITE,this.graphics2.circle(this.startX+t*this.tileWidth+this.tileWidth/2,this.startY+e*this.tileWidth+this.tileWidth/2,.45*this.tileWidth),this.graphics2.fill())},e.prototype.placeBlack=function(t){this.pieceMap[t.x][t.y]=new o.ReversiPiece(t.x,t.y,s.BLACK),this.lastPiece=this.pieceMap[t.x][t.y],this.refresh()},e.prototype.placeWhite=function(t){this.pieceMap[t.x][t.y]=new o.ReversiPiece(t.x,t.y,s.WHITE),this.lastPiece=this.pieceMap[t.x][t.y],this.refresh()},e.prototype.getPieceByCoor=function(t){return this.pieceMap[t.x][t.y]},e.prototype.onTouched=function(t){var e=this.node.convertToNodeSpaceAR(t.getLocation());if(!(e.x<this.startX||e.y<this.startY||e.x>this.startX+this.boardWidth||e.y>this.startY+this.boardHeight)){var i=this.getCoorByPos(e);this.reversiScene.onBoardTouched(i)}},e.prototype.getCoorByPos=function(t){var e=Math.round((t.x-this.startX-this.tileWidth/2)/this.tileWidth),i=Math.round((t.y-this.startY-this.tileWidth/2)/this.tileWidth);return cc.v2(e,i)},e.prototype.nearPiece=function(t,e){switch(e){case 1:if(0!==t.x)return this.pieceMap[t.x-1][t.y];break;case 2:if(0!==t.x&&t.y!==this.rowsSum-1)return this.pieceMap[t.x-1][t.y+1];break;case 3:if(t.y!==this.rowsSum-1)return this.pieceMap[t.x][t.y+1];break;case 4:if(t.x!==this.colsSum-1&&t.y!==this.rowsSum-1)return this.pieceMap[t.x+1][t.y+1];break;case 5:if(t.x!==this.colsSum-1)return this.pieceMap[t.x+1][t.y];break;case 6:if(t.x!==this.colsSum-1&&0!==t.y)return this.pieceMap[t.x+1][t.y-1];break;case 7:if(0!==t.y)return this.pieceMap[t.x][t.y-1];break;case 8:if(0!==t.x&&0!==t.y)return this.pieceMap[t.x-1][t.y-1]}return null},e.prototype.judgePass=function(t,e,i){var o=e;if(null===(o=this.nearPiece(e,i)))return!1;for(;o.color===-t;){if(null===(o=this.nearPiece(o,i)))return!1;if(o.color===t)return!0}return!1},e.prototype.changePass=function(t,e){for(var i=this.nearPiece(t,e);i.color===-this.reversiScene.state;)i.color=t.color,i=this.nearPiece(i,e);this.refresh()},e.prototype.canPlace=function(t,e){for(var i=1;i<=8;i++){if(this.judgePass(t,this.getPieceByCoor(e),i))return!0;if(8===i)return!1}},e.prototype.judgeMoveable=function(t){for(var e=null,i=0;i<this.colsSum;i++)for(var o=0;o<this.rowsSum;o++)if((e=this.pieceMap[i][o]).color===s.NONE)for(var r=1;r<=8;r++)if(this.judgePass(t,e,r))return!0;return!1},e.prototype.judgeWin=function(){var t=this.judgeMoveable(this.lastPiece.color),e=this.judgeMoveable(-this.lastPiece.color);return!t&&!e},e.prototype.getPieceCount=function(){for(var t=0,e=0,i=0;i<this.pieceMap.length;i++)for(var o=0;o<this.pieceMap[i].length;o++)this.pieceMap[i][o].color===s.BLACK?t++:this.pieceMap[i][o].color===s.WHITE&&e++;return{blackPieceSum:t,whitePieceSum:e}},e.prototype.addListeners=function(){this.node.on(cc.Node.EventType.TOUCH_END,this.onTouched,this)},e.prototype.removeListeners=function(){},__decorate([a(cc.Integer)],e.prototype,"colsSum",void 0),__decorate([a(cc.Integer)],e.prototype,"rowsSum",void 0),__decorate([a(cc.Graphics)],e.prototype,"graphics",void 0),__decorate([a(cc.Graphics)],e.prototype,"graphics2",void 0),e=__decorate([c],e)}(cc.Component);i.ReversiBoard=n,cc._RF.pop()},{"./ReversiConstants":"ReversiConstants","./ReversiPiece":"ReversiPiece"}],ReversiConstants:[function(t,e,i){"use strict";cc._RF.push(e,"42661F1JzZNuZUWFOTg6E1t","ReversiConstants"),Object.defineProperty(i,"__esModule",{value:!0}),i.NONE=0,i.BLACK=1,i.WHITE=-1,cc._RF.pop()},{}],ReversiPiece:[function(t,e,i){"use strict";cc._RF.push(e,"bdfa7e/LeBNGpN93hwoveof","ReversiPiece"),Object.defineProperty(i,"__esModule",{value:!0});var o=function(){return function(t,e,i){this.x=t,this.y=e,this.color=i}}();i.ReversiPiece=o,cc._RF.pop()},{}],ReversiScene:[function(t,e,i){"use strict";cc._RF.push(e,"05ff4fnZAdCwZScbk1f0GpO","ReversiScene"),Object.defineProperty(i,"__esModule",{value:!0});var o=t("./ReversiBoard"),s=t("./ReversiAI"),r=t("./ReversiConstants"),c=t("../G"),a=cc._decorator,n=a.ccclass,h=a.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.board=null,e.blackScoreLabel=null,e.whiteScoreLabel=null,e.ai=null,e.state=r.NONE,e}return __extends(e,t),e.prototype.start=function(){this.board.init(this),this.ai=new s.ReversiAI(this.board),this.startGame()},e.prototype.startGame=function(){this.state=r.BLACK,this.board.reset(),this.blackScoreLabel.string="2",this.whiteScoreLabel.string="2",c.G.gameRoot.showTip("你是黑棋你先走")},e.prototype.overGame=function(){var t=this.board.getPieceCount(),e=t.blackPieceSum,i=t.whitePieceSum;e>i?(cc.log("白棋胜"),c.G.gameRoot.showMaskMessage("你赢了阿尔法二狗！",{label:"朕知道了",cb:function(){},target:this})):e<i?(cc.log("黑棋胜"),c.G.gameRoot.showMaskMessage("你输给了阿尔法二狗！",{label:"服了",cb:function(){},target:this},{label:"不服",cb:function(){},target:this})):(cc.log("平局"),c.G.gameRoot.showMaskMessage("你和阿尔法二狗五五开!",{label:"朕知道了",cb:function(){},target:this})),this.state=r.NONE},e.prototype.updateScore=function(){var t=this.board.getPieceCount(),e=t.blackPieceSum,i=t.whitePieceSum;this.blackScoreLabel.string=e+"",this.whiteScoreLabel.string=i+""},e.prototype.onBtnReturn=function(){c.G.returnHall()},e.prototype.onBtnRestart=function(){this.startGame()},e.prototype.runAi=function(){var t=this;this.scheduleOnce(function(){var e=t.ai.getNextCoor();t.board.placeWhite(e);for(var i=t.board.getPieceByCoor(e),o=1;o<=8;o++)t.board.judgePass(r.WHITE,i,o)&&t.board.changePass(i,o);t.updateScore(),t.board.judgeWin()?t.overGame():t.board.judgeMoveable(r.BLACK)?t.state=r.BLACK:(c.G.gameRoot.showTip("黑棋无地可下，白棋继续"),t.runAi())},1)},e.prototype.onBoardTouched=function(t){switch(this.state){case r.NONE:break;case r.BLACK:var e=this.board.getPieceByCoor(t);if(e.color!==r.NONE)return void c.G.gameRoot.showTip("这里有子了，你是不是傻");if(!this.board.canPlace(this.state,t))return void c.G.gameRoot.showTip("不符合规则");this.board.placeBlack(t),e=this.board.getPieceByCoor(t);for(var i=1;i<=8;i++)this.board.judgePass(r.BLACK,e,i)&&this.board.changePass(e,i);this.updateScore(),this.board.judgeWin()?this.overGame():this.board.judgeMoveable(r.WHITE)?(this.state=r.WHITE,this.runAi()):c.G.gameRoot.showTip("白棋无地可下，黑棋继续");break;case r.WHITE:}},__decorate([h(o.ReversiBoard)],e.prototype,"board",void 0),__decorate([h(cc.Label)],e.prototype,"blackScoreLabel",void 0),__decorate([h(cc.Label)],e.prototype,"whiteScoreLabel",void 0),e=__decorate([n],e)}(cc.Component);i.ReversiScene=p,cc._RF.pop()},{"../G":"G","./ReversiAI":"ReversiAI","./ReversiBoard":"ReversiBoard","./ReversiConstants":"ReversiConstants"}],Streak:[function(t,e,i){"use strict";cc._RF.push(e,"7d2a9UGfIdOHJj/cCvXlEIj","Streak"),Object.defineProperty(i,"__esModule",{value:!0});var o=cc._decorator,s=o.ccclass,r=o.property,c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.g=null,e}return __extends(e,t),e.prototype.start=function(){this.node.parent.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.node.parent.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.parent.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this),this.node.parent.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchEnd,this),this.node.parent.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this)},e.prototype.onTouchStart=function(t){var e=this.node.parent.convertToNodeSpaceAR(t.getLocation());this.g.circle(e.x,e.y,5),this.g.fill(),this.g.moveTo(e.x,e.y)},e.prototype.onTouchMove=function(t){var e=this.node.parent.convertToNodeSpaceAR(t.getLocation());this.g.lineTo(e.x,e.y),this.g.stroke(),this.g.moveTo(e.x,e.y)},e.prototype.onTouchEnd=function(t){var e=this.node.parent.convertToNodeSpaceAR(t.getLocation());this.g.circle(e.x,e.y,5),this.g.fill(),this.g.clear()},__decorate([r(cc.Graphics)],e.prototype,"g",void 0),e=__decorate([s],e)}(cc.Component);i.Streak=c,cc._RF.pop()},{}]},{},["M2048Board","M2048Constants","M2048Piece","M2048Scene","G","GobangAI","GobangBoard","GobangConstants","GobangPiece","GobangScene","HallScene","LodingScene","ReversiAI","ReversiBoard","ReversiConstants","ReversiPiece","ReversiScene","GameRoot","Streak"]);