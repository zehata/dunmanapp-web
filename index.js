function returnwebpagetodisplaywithoutprofile(appid, apppics, appdata){
            var returninfo = '<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></sc' + 'ript><script type="text/javascript">var config = {    apiKey: "AIzaSyDfAkKocOAk3Elv9V5x0Po4NXuuGGCfdng",    authDomain: "dhypetest0.firebaseapp.com",    databaseURL: "https://dhypetest0.firebaseio.com",    projectId: "dhypetest0",    storageBucket: "",   messagingSenderId: "677082806183"}; firebase.initializeApp(config); </sc' + 'ript><script> var currentappdata = ' + JSON.stringify(appdata) + '; try{var dataserver = firebase.database().ref(\'/appsstorage/' + appid + '/\');}catch(e){} try{dataserver.on("value",function(snapshot){currentappdata = snapshot.val(); try{onDataChanged(currentappdata);}catch(e){} });}catch(e){} function savedata(data){if(Array.isArray(data)){data = Object.assign({}, data);} firebase.database().ref("/appsstorage/'+appid+'/").transaction(function(currentData){return data;});}; function getappdata(){return currentappdata; };  '+imageGiver+' var apppics = '+JSON.stringify(apppics)+'; function getStudentLevel(){ var studentlvl = Number(localStorage.getItem("studentlvl")); return studentlvl; } function getGraduationYear(){ var year = localStorage.getItem("classOf"); return year; } function pushdata(path,data){ if(Array.isArray(data)){data = Object.assign({}, data);}firebase.database().ref(\'/appsstorage/'+appid+'\'+path+\'/\').transaction(function(currentData){if(currentData){if(Array.isArray(currentData)){currentData.push(data);currentData = Object.assign({}, currentData);return currentData;     } else {console.log("The path provided does not point to an array and it is not empty.");return;}} else {return {0:data}; }});}; function transactdata(path,data){ if(Array.isArray(data)){   data = Object.assign({}, data); } firebase.database().ref(\'/appsstorage/'+appid+'\'+path+\'/\').transaction(function(currentData){ return data; }); }; </sc' + 'ript>';
            return returninfo;
        }

        function returnwebpagetodisplaywithprofile(appid, apppics, appdata){
            var returninfo = '<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></sc' + 'ript><script type="text/javascript">var config = {    apiKey: "AIzaSyDfAkKocOAk3Elv9V5x0Po4NXuuGGCfdng",    authDomain: "dhypetest0.firebaseapp.com",    databaseURL: "https://dhypetest0.firebaseio.com",    projectId: "dhypetest0",    storageBucket: "",   messagingSenderId: "677082806183"}; firebase.initializeApp(config); </sc' + 'ript><script> var currentappdata = ' + JSON.stringify(appdata) + '; try{var dataserver = firebase.database().ref(\'/appsstorage/' + appid + '/\');}catch(e){} try{dataserver.on("value",function(snapshot){currentappdata = snapshot.val(); try{onDataChanged(currentappdata);}catch(e){} });}catch(e){} function savedata(data){if(Array.isArray(data)){data = Object.assign({}, data);} firebase.database().ref("/appsstorage/'+appid+'/").transaction(function(currentData){return data;});}; function getappdata(){return currentappdata; };  '+imageGiver+' var apppics = '+JSON.stringify(apppics)+'; function getStudentLevel(){ var studentlvl = Number(localStorage.getItem("studentlvl")); return studentlvl; } function getStudentEmail(){ var googleaccountemail = "'+localStorage.getItem("googleaccountemail")+'"; return googleaccountemail; } function getStudentName(){ var name = "'+localStorage.getItem("googleaccountname")+'"; return name; } function getGraduationYear(){ var year = localStorage.getItem("classOf"); return year; } function pushdata(path,data){ if(Array.isArray(data)){data = Object.assign({}, data);}firebase.database().ref(\'/appsstorage/'+appid+'\'+path+\'/\').transaction(function(currentData){if(currentData){if(Array.isArray(currentData)){currentData.push(data);currentData = Object.assign({}, currentData);return currentData;     } else {console.log("The path provided does not point to an array and it is not empty.");return;}} else {return {0:data}; }});}; function transactdata(path,data){ if(Array.isArray(data)){   data = Object.assign({}, data); } firebase.database().ref(\'/appsstorage/'+appid+'\'+path+\'/\').transaction(function(currentData){ return data; }); }; </sc' + 'ript>';
            return returninfo;
        }

        var imageGiver = `function startObserving(){ new MutationObserver(function(mutationsList, observer) {var images = document.getElementsByTagName('img');for(var i = 0; i < images.length; i++){if(images[i].src.slice(0,5) != "data:" && images[i].src != ""){var ogsrc = images[i].src.replace(/^.*[\\\\\\/]/, '').replace(new RegExp("\\\\.", "g"), "?");if(apppics.hasOwnProperty(ogsrc)){images[i].src = apppics[ogsrc];} else {images[i].removeAttribute("src");}}}}).observe(document.body, { attributes: true, childList: true, subtree: true }); };`;

      var currentappid = "";
var config = {
    apiKey: "AIzaSyDfAkKocOAk3Elv9V5x0Po4NXuuGGCfdng",
    authDomain: "dhypetest0.firebaseapp.com",
    databaseURL: "https://dhypetest0.firebaseio.com",
    projectId: "dhypetest0",
    storageBucket: "",
    messagingSenderId: "677082806183"
};
var connected = true;
try{
firebase.initializeApp(config);
} catch(e){
    connected = false;
}
var selectedappid = "";
var dataserver;
var currentappdata = [];
var appver = 0;
var applist = [];
var installedapplist;
var offlineReadyApps = [];
var offlineData = {};
var analytics = {};
var analyticspro = [];
var analyticsserver = "";

if (localStorage.getItem("offlineReadyApps")){
    offlineReadyApps = JSON.parse(localStorage.getItem("offlineReadyApps"));
}

if (localStorage.getItem("offlineData")){
    offlineData = JSON.parse(localStorage.getItem("offlineData"));
}

if(!localStorage.getItem('emailHash')){
    if(localStorage.getItem('googleaccountemail')){
        var email = localStorage.getItem('googleaccountemail');
        var hash = MD5(email);
        localStorage.setItem('emailHash',hash);
    }
}

var tryingtogoto = "";
var navigating = "";

function gotourl(){
    var cwhref = document.getElementById('preview').contentWindow.location.href;
    var lastpart = cwhref.substr(cwhref.lastIndexOf('/') + 1);
    if (lastpart == "home.html"){
        pageshistory = [];      
    } else if (lastpart != "blank.html" && lastpart != "blank2.html" && lastpart != pageshistory[pageshistory.length - 1][1].replace(new RegExp("\\?", "g"), ".")){
        navigating = "forward";
        tryingtogoto = lastpart;
        document.getElementById('preview').contentWindow.location = "blank.html";
    } else if (lastpart != "blank.html" && lastpart != "blank2.html") {
        document.getElementById('preview').contentWindow.location = "blank.html";
    }
}

function loaded404(){
    if(navigating == "forward"){
        gotopage("forward", tryingtogoto);
    } else {
        gotopage("backward", "");
    }
}

function checkOfflineData(){
    localStorage.setItem("offlineData", JSON.stringify(offlineData));
    if(connected){
        for(var i = 0; i < offlineReadyApps.length; i++){
            getOfflineData(offlineReadyApps[i],i)
        }
    }
}

function getOfflineData(id,i){
    var dataserver = firebase.database().ref('/appsstorage/' + id + '/');
    dataserver.once("value",function(snapshot){
        offlineData[offlineReadyApps[i]] = snapshot.val();
        if((i+1) == offlineReadyApps.length){
            localStorage.setItem("offlineData",JSON.stringify(offlineData));
        }
    });
}

function refreshapplist() {
    installedapplist = [];
    if (localStorage.getItem('applist')) {
        installedapplist = JSON.parse(localStorage.getItem('installedapplist'))
        applist = JSON.parse(localStorage.getItem('applist'));
        appver = Number(localStorage.getItem('CurrentVersion'));
    }
    if(connected){
        if(localStorage.getItem('analytics')){
            analytics = JSON.parse(localStorage.getItem('analytics'));
            analyticspro = Object.entries(analytics);
            for(var k = 0; k < analyticspro.length; k++){
                saveanalyticsdata(k);
            }
        }
    } else {
        if(localStorage.getItem('analytics')){
            analytics = JSON.parse(localStorage.getItem('analytics'));
        }
    }
    checkOfflineData();
    updatecheck();
}
document.getElementById('preview').src = "home.html"; 

var selectedapp;
var selectedappid;

function goback(){
document.getElementById('preview').contentWindow.history.back();
}

function loaded(){
refreshapplist();
}

function godhypes(){
    window.location.href="/Dhype/apps.html";
}

        var givenpermission = {};

        var selectedapppermreq;
        var selectedappidpermreq;
        var currentappdatapermreq;

        function initiatePermissionRequest(selectedapp,selectedappid,currentappdata){
            selectedapppermreq = selectedapp;
            selectedappidpermreq = selectedappid;
            currentappdatapermreq = currentappdata;
            document.getElementById('preview').contentDocument.body.style.overflow = "hidden";
            document.getElementById('preview').contentDocument.getElementById('darken').style.display = "block";
            document.getElementById('preview').contentDocument.getElementById('dialog').style.display = "flex";
            setTimeout(function(){ 
            document.getElementById('preview').contentDocument.getElementById('darken').style.opacity = 1;
            document.getElementById('preview').contentDocument.getElementById('dialog').style.opacity = 0.9; },1)
        }

        function denypermission(){
            document.getElementById('preview').contentDocument.body.style.overflow = "overlay";
            document.getElementById('preview').contentDocument.getElementById('darken').style.opacity = 0;
            document.getElementById('preview').contentDocument.getElementById('dialog').style.opacity = 0;
            
            setTimeout(function(){
            document.getElementById('preview').contentDocument.getElementById('darken').style.display = "none";document.getElementById('preview').contentDocument.getElementById('dialog').style.display = "none";},300);
        }

        function allowpermission(){
            givenpermission[selectedappidpermreq] = true;
            localStorage.setItem('givenpermission',JSON.stringify(givenpermission));
            document.getElementById('preview').contentDocument.body.style.overflow = "overlay";
            document.getElementById('preview').contentDocument.getElementById('darken').style.opacity = 0;
            document.getElementById('preview').contentDocument.getElementById('dialog').style.opacity = 0;
            
            setTimeout(function(){
            document.getElementById('preview').contentDocument.getElementById('darken').style.display = "none";document.getElementById('preview').contentDocument.getElementById('dialog').style.display = "none";},300);
            var proappdata = Object.entries(selectedapppermreq);
            var apppics = {};
            for(var j = 0; j < proappdata.length; j++){
                if(typeof proappdata[j][1] == "string"){
                    if(proappdata[j][1].slice(0,10) == "data:image"){
                        apppics[proappdata[j][0]] = proappdata[j][1];
                    }
                }
            }
            var webpagetodisplay = returnwebpagetodisplaywithprofile(selectedappidpermreq,apppics,currentappdatapermreq);
            setTimeout(function() {
                gotopage("forward", "index?html");
            }, 1);
        }

        function loadpage(selectedapp,selectedappid,currentappdata){
            var clearToLoad = false;
            var noNeedProfile = false;
            if(selectedapp.hasOwnProperty("flag")){
                if(selectedapp.flag.hasOwnProperty("requestProfile")){
                    if(localStorage.getItem('givenpermission')){
                        givenpermission = JSON.parse(localStorage.getItem('givenpermission'));
                        if(!givenpermission.hasOwnProperty(selectedappid)){
                            initiatePermissionRequest(selectedapp,selectedappid,currentappdata);
                        } else {
                            clearToLoad = true;
                        }
                    } else {
                        initiatePermissionRequest(selectedapp,selectedappid,currentappdata);
                    }
                } else {
                    noNeedProfile = true;
                }
            } else {
                noNeedProfile = true;
            }

            if(clearToLoad){
                var proappdata = Object.entries(selectedapp);
                var apppics = {};
                for(var j = 0; j < proappdata.length; j++){
                    if(typeof proappdata[j][1] == "string"){
                        if(proappdata[j][1].slice(0,10) == "data:image"){
                            apppics[proappdata[j][0]] = proappdata[j][1];
                        }
                    }
                }

                    setTimeout(function() {
                    gotopage("forward", "index?html");
                }, 1);
            } else if (noNeedProfile) {
                var proappdata = Object.entries(selectedapp);
                var apppics = {};
                for(var j = 0; j < proappdata.length; j++){
                    if(typeof proappdata[j][1] == "string"){
                        if(proappdata[j][1].slice(0,10) == "data:image"){
                            apppics[proappdata[j][0]] = proappdata[j][1];
                        }
                    }
                }
                setTimeout(function() {
                    gotopage("forward", "index?html");
                }, 1);                  
            }
        }

function goto(x) {
      selectedappid = applist[x][2];
      selectedapp = JSON.parse(localStorage.getItem(selectedappid));
            if(analytics[selectedappid]){
                var timesused = analytics[selectedappid];
                timesused++;
                analytics[selectedappid] = timesused;
            } else {
                var timesused = 0;
                timesused++;
                analytics[selectedappid] = timesused;
            }
    if(connected){
               // injecting data adaptor
                try{
                    var dataserver = firebase.database().ref('/appsstorage/' + selectedappid + '/');
                    dataserver.once("value", function(snapshot) {
                        currentappdata = snapshot.val();
                        loadpage(selectedapp,selectedappid,currentappdata,"goto");
                    });
                }catch(e){

                }
            } else {
                currentappdata = offlineData[selectedappid];
                loadpage(selectedapp,selectedappid,currentappdata,"goto");
            }    
}

var nextpage = "";
var pageshistory = [];

function gotopage(navigation,htmlname) {
    var gohome = false;
    document.getElementById('preview').contentWindow.location = "blank2.html";
    var html = "";
    if(navigation == "forward"){
        html = htmlname.replace(new RegExp("\\.", "g"), "?");
        pageshistory.push([selectedappid,html]);
        navigating = "back";
    } else {
        if(pageshistory.length > 1){
            selectedappid = pageshistory[pageshistory.length-2][0];
            html = pageshistory[pageshistory.length-2][1];
            pageshistory.pop();
        } else {
            pageshistory = [];
            document.getElementById('preview').contentWindow.location = "home.html";
            gohome = true;
        }
    }

    var clearToLoad = false;
    var noNeedProfile = false;
    if(selectedapp.hasOwnProperty("flag")){
        if(selectedapp.flag.hasOwnProperty("requestProfile")){
            clearToLoad = true;
        } else {
            noNeedProfile = true;
        }
    } else {
        noNeedProfile = true;
    }
    
    if(!gohome){
    if(connected){
           // injecting data adaptor
            try{
                var dataserver = firebase.database().ref('/appsstorage/' + selectedappid + '/');
                dataserver.once("value", function(snapshot) {
                        currentappdata = snapshot.val();
                        var proappdata = Object.entries(selectedapp);
                        var apppics = {};
                        for(var j = 0; j < proappdata.length; j++){
                            if(typeof proappdata[j][1] == "string"){
                                if(proappdata[j][1].slice(0,10) == "data:image"){
                                    apppics[proappdata[j][0]] = proappdata[j][1];
                                }
                            }
                        }
                        if(clearToLoad){
                            var webpagetodisplay = returnwebpagetodisplaywithprofile(selectedappid, apppics, currentappdata);
                        } else {
                            var webpagetodisplay = returnwebpagetodisplaywithoutprofile(selectedappid, apppics, currentappdata);
                        }
                        setTimeout(function(){
                                document.getElementById('preview').contentDocument.write(String(webpagetodisplay+selectedapp[html]));
                                document.getElementById('preview').contentWindow.startObserving();
                        }, 1);
                    });
            }catch(e){

            }
        } else {
            selectedapp = JSON.parse(localStorage.getItem(selectedappid));
            currentappdata = offlineData[selectedappid];
            var proappdata = Object.entries(selectedapp);
                        var apppics = {};
                        for(var j = 0; j < proappdata.length; j++){
                            if(typeof proappdata[j][1] == "string"){
                                if(proappdata[j][1].slice(0,10) == "data:image"){
                                    apppics[proappdata[j][0]] = proappdata[j][1];
                                }
                            }
                        }
                        if(clearToLoad){
                            var webpagetodisplay = returnwebpagetodisplaywithprofile(selectedappid, apppics, currentappdata);
                        } else {
                            var webpagetodisplay = returnwebpagetodisplaywithoutprofile(selectedappid, apppics, currentappdata);
                        }
            setTimeout(function(){
                                document.getElementById('preview').contentDocument.write(String(webpagetodisplay+selectedapp[html]));
                                document.getElementById('preview').contentWindow.startObserving();
            }, 1);
        }    
    }
}

function sendappdata() {
    return currentappdata;
}

        function updatecheck() {
            if (navigator.onLine) {
                appverserver = firebase.database().ref('appsversion/');
                if (installedapplist && installedapplist.length > 0) {
                    appverserver.on("value", function(snapshot) { // check the database for app versions and app list version
                        installedapplist = JSON.parse(localStorage.getItem('installedapplist'));
                        rawdata = Object.entries(snapshot.val());
                        if (appver < Number(snapshot.val().CurrentVersion)) { // if there has been an update to the app list version                            
                            // for each installed app
                            for (var j = 0; j < installedapplist.length; j++) {
                                // should we update or delete or leave it?
                                // should we delete?
                                var deleteapp = true;
                                // does it exist in app server (not applist)
                                for (var i = 0; i < rawdata.length; i++) {
                                    if (rawdata[i][0] != "applist" && rawdata[i][0] != "CurrentVersion") {
                                        if (installedapplist[j][0] == rawdata[i][0]) {
                                            deleteapp = false;
                                        }
                                    }
                                }
                                if (deleteapp == true) {
                                    // delete this app
                                    localStorage.removeItem(installedapplist[j][0]);
                                    var offlineReadyApps = JSON.parse(localStorage.getItem("offlineReadyApps"));
                                    var offlineData = JSON.parse(localStorage.getItem("offlineData"));
                                    offlineReadyApps.splice(offlineReadyApps.indexOf(installedapplist[j][0]),1);
                                    delete offlineData[installedapplist[j][0]];
                                    localStorage.setItem("offlineData",JSON.stringify(offlineData));
                                    localStorage.setItem("offlineReadyApps",JSON.stringify(offlineReadyApps));
                                    installedapplist.splice(j,1);
                                    var installedapplist = installedapplist.filter(function (el) {
                                      return el != null;
                                    });
                                    localStorage.setItem("installedapplist",JSON.stringify(installedapplist));
                                }
                            }
                            updateapp(rawdata);
                            // for each app in appserver
                            for (var k = 0; k < rawdata.length; k++) {
                                if (rawdata[k][0] != "applist" && rawdata[k][0] != "CurrentVersion") {
                                    // check if it is installed
                                    var installed = false;
                                    for (var l = 0; l < installedapplist.length; l++) {
                                        if (installedapplist[l][0] == rawdata[k][0]) {
                                            installed = true;
                                        }
                                    }
                                    if (installed == false) {
                                        var savingappid = rawdata[k][0];
                                        getNewData(savingappid, k);
                                    }
                                }
                            }
                            localStorage.setItem("applist", JSON.stringify(snapshot.val().applist));
                            applist = snapshot.val().applist;
                            appver = Number(snapshot.val().CurrentVersion);
                            localStorage.setItem('CurrentVersion', appver);
                        }
                        checkRecServerAlgoUpdated();
                    });
                } else {
                    appverserver.once("value").then(function(snapshot) {
                        localStorage.setItem("applist", JSON.stringify(snapshot.val().applist));
                        appver = Number(snapshot.val().CurrentVersion);
                        localStorage.setItem('CurrentVersion', appver);
                    })
                    firebase.database().ref('apps/').once("value").then(function(snapshot) {
                        var updatedapps = Object.entries(snapshot.val());
                        var installedapplist = [];
                        for (var i = 0; i < updatedapps.length; i++) {
                            if (updatedapps[i][0] != "test" && updatedapps[i][0] != "test") {
                                installedapplist.push([updatedapps[i][0], updatedapps[i][1]["version"]]);
                                localStorage.setItem(updatedapps[i][0], JSON.stringify(updatedapps[i][1]));
                                if (updatedapps[i][1]["flag"]) {
                                    if (updatedapps[i][1]["flag"]["requiresOfflineData"]) {
                                        offlineReadyApps.push(updatedapps[i][0]);
                                    }
                                }
                                checkOfflineData();
                            }
                        }
                        localStorage.setItem("offlineReadyApps", JSON.stringify(offlineReadyApps));
                        localStorage.setItem('installedapplist', JSON.stringify(installedapplist));
                        refreshapplist();
                    });
                    checkRecServerAlgoUpdated();
                }
            } else {
                checkRecServerAlgoUpdated();
            }
            document.getElementById('preview').contentWindow.populatedrawer(applist);
        }

function updateapp(rawdata){
// should we update?
    for (var i = 0; i < rawdata.length; i++) {
        if (rawdata[i][0] != "CurrentVersion" && rawdata[i][0] != "applist") {
            for(var j = 0; j < installedapplist.length; j++){
                if (installedapplist[j][0] == rawdata[i][0]) {
                    // if server version is higher
                    if (Number(installedapplist[j][1]) < rawdata[i][1]) {
                        // then update     
                        var updatedappid = installedapplist[j][0];
                        installedapplist[j][1] = rawdata[i][1];
                        
                    }
                }
            }
        }
    }
}

function getNewData(id,i){
    firebase.database().ref('apps/' + id + '/').once("value").then(function(snapshot) {
        if (snapshot.val().flag) {
            if (snapshot.val().flag.requiresOfflineData) {
                var offlineReadyApps = JSON.parse(localStorage.getItem("offlineReadyApps"));
                offlineReadyApps.push(id);
                localStorage.setItem("offlineReadyApps", JSON.stringify(offlineReadyApps));
            }
        }
        checkOfflineData();
        var snapshotval = snapshot.val();
        var installedapplist = JSON.parse(localStorage.getItem("installedapplist"));
        installedapplist.push(rawdata[i]);
        localStorage.setItem(id, JSON.stringify(snapshotval));
        localStorage.setItem('installedapplist', JSON.stringify(installedapplist));
        checkRecServerAlgoUpdated();
    });
}

if (!Object.entries)
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    
    return resArray;
  };


    function checkRecServerAlgoUpdated(){
        if(navigator.onLine){
            var recAlgoServer = firebase.database().ref('/reccards/algo/');
            recAlgoServer.on("value",function(snapshot){
                recAlgoData = snapshot.val();
                if(recServerAlgoUpdated()){
                    updateRecAlgo();
                } else {
                    useRecAlgo();
                }
            });
        } else {
            recAlgoData = JSON.parse(localStorage.getItem("recAlgo"));
            useRecAlgo();
        }
    }

    function recServerAlgoUpdated(){
        var recserverversion = 0;
        if (localStorage.getItem('recAlgo')){
            recserverversion = JSON.parse(localStorage.getItem('recAlgo')).version;
        }
        if(recserverversion < recAlgoData.version){
            return true;
        }
        return false;
    }

    function updateRecAlgo(){
        localStorage.setItem('recAlgo',JSON.stringify(recAlgoData));
        useRecAlgo();
    }

    var reccards = [];

    function useRecAlgo(){
            reccards = [];
            var recAlgo = JSON.parse(localStorage.getItem('recAlgo'));
            var recAlgoPro = Object.entries(recAlgo);
            var recApps = [];
            for(var i = 0; i < recAlgoPro.length; i++){
                if(recAlgoPro[i][0] != "version"){
                    if(typeof recAlgoPro[i][1][0] == "object"){
                        if(recAlgoPro[i][1][0][0] == "time"){
                            // var recAlgoPro[i][1][0] = ["time",[0,330],[500,600]]
                            var d = new Date();
                            var currentminutes = 60*d.getHours()+d.getMinutes();

                            var shouldpush = false;
                            for(var k = 0; k < recAlgoPro[i][1][0].length;k++){
                                if(currentminutes >= recAlgoPro[i][1][0][k][0] && currentminutes >= recAlgoPro[i][1][0][k][1]){
                                    shouldpush = true;
                                }
                            }
                            if(shouldpush){
                                if(recApps.length != 0){
                                    var j = 0;
                                    while(recAlgoPro[i][1][1] < recApps[j][1]){
                                        j++;
                                        if(j==recApps.length){
                                            break;
                                        }
                                    }
                                    if(localStorage.getItem(recAlgoPro[i][0])){
                                        recApps.splice(j,0,[recAlgoPro[i][0],recAlgoPro[i][1][1]]);
                                    }
                                } else {
                                    if(localStorage.getItem(recAlgoPro[i][0])){
                                        recApps.push([recAlgoPro[i][0],recAlgoPro[i][1][1]]);
                                    }
                                }
                            }
                        } else if(recAlgoPro[i][1][0][0] == "day"){
                            var day = new Date().getDay();
                            var shouldpush = false;
                            if(recAlgoPro[i][1][0][Number(day)+1]){
                                shouldpush = true;
                            }
                            if(shouldpush){
                                if(recApps.length != 0){
                                    var j = 0;
                                    while(recAlgoPro[i][1][1] < recApps[j][1]){
                                        j++;
                                        if(j==recApps.length){
                                            break;
                                        }
                                    }
                                    if(localStorage.getItem(recAlgoPro[i][0])){
                                        recApps.splice(j,0,[recAlgoPro[i][0],recAlgoPro[i][1][1]]);
                                    }
                                } else {
                                    if(localStorage.getItem(recAlgoPro[i][0])){
                                        recApps.push([recAlgoPro[i][0],recAlgoPro[i][1][1]]);
                                    }
                                }
                            }
                        }
                    } else {
                        if(eval(recAlgoPro[i][1][0])){
                            if(recApps.length != 0){
                                var j = 0;
                                while(recAlgoPro[i][1][1] < recApps[j][1]){
                                    j++;
                                    if(j==recApps.length){
                                        break;
                                    }
                                }
                                if(localStorage.getItem(recAlgoPro[i][0])){
                                    recApps.splice(j,0,[recAlgoPro[i][0],recAlgoPro[i][1][1]]);
                                }
                            } else {
                                if(localStorage.getItem(recAlgoPro[i][0])){
                                    recApps.push([recAlgoPro[i][0],recAlgoPro[i][1][1]]);
                                }
                            }
                        }
                    }
                }
            }
            for(var k = 0; k < recApps.length; k++){
                reccards.push(recApps[k][0]);
            }
            if(document.getElementById('preview').contentWindow.location.href.substr(document.getElementById('preview').contentWindow.location.href.lastIndexOf('/') + 1) == "home.html"){
                document.getElementById('preview').contentWindow.createLayouts();
            }
            callAllApps();
        }
            

        function callAllApps(){
            for(var i = 0; i < reccards.length;i++){
                callApp(reccards[i],i)
            }
        }

        function callApp(id,index){
            if (navigator.onLine){
                var dataserver = firebase.database().ref('/appsstorage/' + id + '/');
                dataserver.once("value", function(snapshot) {
                    evalReccardJs(snapshot.val(),id,index);
                });
            } else {
                if(checkofflineready(id)){
                    evalReccardJs(offlineData[id],id,index);
                }
            }
        }

        function evalReccardJs(currentappdata,id,index){
            var app = JSON.parse(localStorage.getItem(id));
            var generatedcard = "";
            if(app){
                var clearToLoad = false;
                var noNeedProfile = false;
                if(app.hasOwnProperty("flag")){
                    if(app.flag.hasOwnProperty("requestProfile")){
                        if(localStorage.getItem("givenpermission")){
                            if(JSON.parse(localStorage.getItem("givenpermission"))[id]){
                                clearToLoad = true;
                            }
                        }
                    } else {
                        noNeedProfile = true;
                    }
                } else {
                    noNeedProfile = true;
                }
                if(app["recCard?js"] && currentappdata && clearToLoad){
                    eval("function getappdata(){ var data = ("+JSON.stringify(currentappdata)+"); return data; } function getStudentLevel(){ var studentlvl = Number(localStorage.getItem('studentlvl')); return studentlvl; } function getStudentName(){ var name = localStorage.getItem('googleaccountname'); return name; } function getGraduationYear(){ var year = localStorage.getItem('classOf'); return year; } "+app["recCard?js"]);
                } else if (app["recCard?js"] && currentappdata && noNeedProfile){
                    eval("function getappdata(){ var data = ("+JSON.stringify(currentappdata)+"); return data; } function getStudentLevel(){ var studentlvl = Number(localStorage.getItem('studentlvl')); return studentlvl; } function getGraduationYear(){ var year = localStorage.getItem('classOf'); return year; } "+app["recCard?js"]);
                } else {

                }
                if(document.getElementById('preview').contentWindow.location.href.substr(document.getElementById('preview').contentWindow.location.href.lastIndexOf('/') + 1) == "home.html"){
                    document.getElementById('preview').contentWindow.reccardsadaptor(generatedcard,id,index);
                }
            }
        }


        function checkofflineready(id){
            for (var i = 0; i < offlineReadyApps.length; i++){
                if (offlineReadyApps[i] == id){
                    return true;
                }
            }
            return false;
        }



  var allappdata = "";


    function getreccards(){
        return reccards;
    }

    var loadinghome = true;
    var fromhome = false;