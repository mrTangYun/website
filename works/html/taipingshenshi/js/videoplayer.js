// maps callbacks to the the correct player
VideoPlayerCallbackListener = {
    // holds references to video player objects
    references: [],
    
    // register a player to recieve callbacks
    register: function(reference){
        var id = this.references.push(reference);
        return id - 1;
    },

    // unregister a player
    unregister: function(id){
        this.references[id] = null;
    },
    
    // dump all callbacks here they will be mapped to the indended player object
    callbacks: {
        akamaiReady: function(id){
            var reference = VideoPlayerCallbackListener.references[id];
            if(reference != null) reference.playerReady();
        },
        akamaiInitiatedStart: function(id){
            var reference = VideoPlayerCallbackListener.references[id];
            if(reference != null) reference.options.onStart();
        },
        akamaiComplete: function(id){
            var reference = VideoPlayerCallbackListener.references[id];
            if(reference != null) reference.options.onComplete();
        },
        akamaiPercentComplete: function(id, percent){
            var reference = VideoPlayerCallbackListener.references[id];
            if(reference != null) reference.options.onPercentComplete(percent);
        },
        akamaiInitiatedStop: function(id, timeCode){
            var reference = VideoPlayerCallbackListener.references[id];
            if(reference != null) reference.options.onStop(timeCode);
        },
        akamaiInitiatedPlay: function(id, timeCode){
            var reference = VideoPlayerCallbackListener.references[id];
            if(reference != null) reference.options.onPlay(timeCode);
        },
        akamaiProgress: function(id, timeCode){
            var reference = VideoPlayerCallbackListener.references[id];
            if(reference != null) reference.options.onProgress(timeCode);
        },
        akamaiInitiatedLoaded: function(id){
            var reference = VideoPlayerCallbackListener.references[id];
            if(reference != null) reference.options.onLoaded();
        },
        akamaiInitiatedFullscreen: function(id, state){
            var reference = VideoPlayerCallbackListener.references[id];
            if(reference != null) reference.options.onToggleFullscreen(state);
        },
        getScreenWidth: function(){ return screen.width; },
        getScreenHeight: function(){ return screen.height; }
    }
}

VideoPlayer = function(elementId, startVideoData, options) {
    // options that can overwritten
    this.options = {
        swfPath          : '../swf/streaming-player.swf',
        backgroundColor  : '#000000', // null is a transparent background
        wmode            : 'transparent', // window, transparent, opaque
        playerDefaults   : {
            initAtX          : 0,
            initAtY          : 0,
            mode             : 'overlay', // overlay or sidebyside
            scaleMode        : 'stretch', //fit, stretch, native, nativeorsmaller
            enableFullscreen : true,
            fullscreenTo     : 'screen',
            frameColor       : 'c51823',
            fontColor        : 'ffffff',
            themeColor       : 'c51823',
            autostart        : false,
            link             : '',
            loadImage        : '',
            endImage         : '',
            chromeless       : false,
            endEvent         : 'poster'
        },
        onLoaded		: function(timeCode){},
		onProgress		: function(){},
        onEmbedComplete    : function(){}, // fired when flash has been embedded
        onStart            : function(){}, // fired when video starts to play
        onComplete         : function(){}, // fired when viedo completes
        onPercentComplete  : function(percentage){}, // fired at 25%, 50% and 75% completion
        onStop             : function(timeCode){}, // fired when user initiates stop
        onPlay             : function(timeCode){}, // fired when user initiates play
        onToggleFullscreen : function(state){} // fired when user initiates fullscreen
    };
    jQuery.extend(true, this.options, options);
    
    // register this player to recieve callbacks
    this.playerId = VideoPlayerCallbackListener.register(this);
    
    // map the start video to the current video
    this.currentVideoData = startVideoData;
    
    // calculate player dimensions based on the element the player is replacing
    this.elementId = elementId;
    var temp = jQuery('#' + this.elementId);
    this.options.playerDefaults.width = temp.width();
    this.options.playerDefaults.height = temp.height();
    
    // setup embed vars
    this.player = null;
    var flashvars = { playerId: this.playerId, callbackLocation: 'VideoPlayerCallbackListener.callbacks' }
    var params = { wmode: this.options.wmode, scale:'noscale', salign:'lt', allowscriptaccess: 'always', swLiveConnect: 'true', allowfullscreen: 'true' };
    
    // apply optional background color
    if(this.options.backgroundColor) params.bgcolor = this.options.backgroundColor;
    
    // embed swf
    swfobject.embedSWF(this.options.swfPath, elementId, this.options.playerDefaults.width, this.options.playerDefaults.height, '9.0.45', false, flashvars, params, false);
};
// internal use only flash notifys that it has initialized after imbedding
VideoPlayer.prototype.playerReady = function(){
    // collect player element for flash callbacks
    this.player = document.getElementById(this.elementId);
    
    // fire optional embed callback
    this.options.onEmbedComplete();
        
    // load first video
    this.load(this.currentVideoData);
};
// load a video
VideoPlayer.prototype.load = function(playerData){
    if(this.player){        
        // extend the defaults with whatever is passed in
        this.currentVideo = jQuery.extend(this.options.playerDefaults, playerData);
        
        // tell swf to load the video
        this.player.initAkamaiPlayer(this.currentVideo);
    } else return false;
};
// dispose of video player
VideoPlayer.prototype.dispose = function(){
    if(this.player) this.player.disposeAkamaiPlayer();
    else return false;
};
// pause video
VideoPlayer.prototype.pause = function(){
    if(this.player) this.player.pauseAkamaiPlayer();
    else return false;
};
// resume video
VideoPlayer.prototype.resume = function(){
	if(this.player) this.player.resumeAkamaiPlayer();
    else return false;
};
// seek video
VideoPlayer.prototype.seek = function(time){
    if(this.player) this.player.seekAkamaiPlayer(time);
    else return false;
};
// toggle video to fullscreen
VideoPlayer.prototype.toggleFullscreen = function(time){
    if(this.player) this.player.akamaiToggleFullscreen();
    else return false;
};
// enable flash logging in console
VideoPlayer.prototype.startLogging = function(){
    if(this.player) this.player.doFlashLogging();
    else return false;
};
// disable flash from logging to console
VideoPlayer.prototype.stopLogging = function(){
    if(this.player) this.player.stopFlashLogging();
    else return false;
};
//toggle forcing controls open
VideoPlayer.prototype.controlsVisibleState = function(state){
    if(this.player) this.player.controlsVisibleState(state);
    else return false;
};
// destroy this VideoPlayer object
VideoPlayer.prototype.destroy = function(){
    VideoPlayerCallbackListener.unregister(this.playerId);
};