(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4084,4193],{"1tEM":function(e,t,n){"use strict"
n.r(t)
var i=n("mX+G")
var a=n.n(i)
var r=n("ouhR")
var o=n.n(r)
var s=n("3O+N")
var l=n.n(s)
var c=n("HGxv")
n("BGrI")
var u=l.a.default
var d=u.template,h=u.templates=u.templates||{}
var f="/work/canvas-deploy/generated/ui/features/take-quiz/jst/fileUploadQuestionState"
h[f]=d((function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
a=a||{}
var r,o="",s="function",l=this.escapeExpression,c=n.helperMissing,u=this
function d(e,t){var i,a,r,o=""
o+="\n  "
if(a=n.display_name)i=a.call(e,{hash:{},data:t})
else{a=e&&e.display_name
i=typeof a===s?a.call(e,{hash:{},data:t}):a}o+=l(i)+"<button role='button' class=\"pull-right delete-attachment\" aria-label='"+l((a=n.t||e&&e.t,r={hash:{name:e&&e.display_name,scope:"quizzes.file_upload_question_state"},data:t},a?a.call(e,"#buttons.delete_file","Delete file %{name}",r):c.call(e,"t","#buttons.delete_file","Delete file %{name}",r)))+'\'><i class="icon-end"/></button>\n'
return o}function h(e,t){var i,a=""
a+="\n  "
i=n["if"].call(e,e&&e.isIE,{hash:{},inverse:u.program(6,p,t),fn:u.program(4,f,t),data:t});(i||0===i)&&(a+=i)
a+="\n"
return a}function f(e,t){return'\n    <input name=file class="file-upload" type=file />\n  '}function p(e,t){var i,a,r=""
r+='\n    <button class="btn file-upload-btn">\n      '+l((i=n.t||e&&e.t,a={hash:{scope:"quizzes.file_upload_question_state"},data:t},i?i.call(e,"#buttons.choose_a_file","Choose a File",a):c.call(e,"t","#buttons.choose_a_file","Choose a File",a)))+"\n    </button>\n  "
return r}r=n["if"].call(t,t&&t.display_name,{hash:{},inverse:u.program(3,h,a),fn:u.program(1,d,a),data:a});(r||0===r)&&(o+=r)
o+="\n"
return o}))
var p=h[f]
var m=l.a.default
var g=m.template,_=m.templates=m.templates||{}
var b="/work/canvas-deploy/generated/ui/features/take-quiz/jst/fileUploadedOrRemoved"
_[b]=g((function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
a=a||{}
var r,o="",s=n.helperMissing,l=this.escapeExpression,c=this
function u(e,t){var i,a,r=""
r+='\n\n  <div class="file-status file-uploaded">\n    <em role="alert" aria-live="assertive">\n    '+l((i=n.t||e&&e.t,a={hash:{scope:"quizzes.file_uploaded_or_removed"},data:t},i?i.call(e,"quizzes.file_successfully_uploaded","Your file has been successfully uploaded.",a):s.call(e,"t","quizzes.file_successfully_uploaded","Your file has been successfully uploaded.",a)))+"\n    </em>\n  </div>\n"
return r}function d(e,t){var i,a,r=""
r+='\n  <div class="file-status file-removed">\n    <em role="alert" aria-live="assertive">\n      '+l((i=n.t||e&&e.t,a={hash:{display_name:e&&e.display_name,scope:"quizzes.file_uploaded_or_removed"},data:t},i?i.call(e,"quizzes.files_removed","%{display_name} has been removed.",a):s.call(e,"t","quizzes.files_removed","%{display_name} has been removed.",a)))+"\n    </em>\n  </div>\n"
return r}r=n["if"].call(t,t&&t.fileUploaded,{hash:{},inverse:c.program(3,d,a),fn:c.program(1,u,a),data:a});(r||0===r)&&(o+=r)
o+="\n"
return o}))
var v=_[b]
n("Dhso")
n("sXof")
class y extends i["View"]{static initClass(){this.prototype.els={".file-upload":"$fileUpload",".file-upload-btn":"$fileDialogButton",".attachment-id":"$attachmentID",".file-upload-box":"$fileUploadBox","#fileupload_in_progress":"$fileUploadInprogress"}
this.prototype.events={"change input[type=file]":"checkForFileChange","click .file-upload-btn":"openFileBrowser","click .delete-attachment":"deleteAttachment"}}checkForFileChange(e){let t
e.preventDefault()
e.stopPropagation()
if(t=this.$fileUpload.val()){this.removeFileStatusMessage()
this.model.set("file",this.$fileUpload[0])
this.$fileUploadInprogress.val(true)
const e=this.model.save(null,{success:this.processAttachment.bind(this)})
return this.$fileUploadBox.disableWhileLoading(e)}}openFileBrowser(e){e.preventDefault()
return this.$fileUpload.click()}render(){super.render(...arguments)
const e=!!o.a.browser.msie
this.$fileUploadBox.html(p({...this.model.present(),isIE:e}))
this.$fileUpload=this.$(".file-upload")
return this}removeFileStatusMessage(){return this.$fileUploadBox.siblings(".file-status").remove()}processAttachment(e){this.$attachmentID.val(this.model.id).trigger("change")
this.$fileUploadInprogress.val(false)
this.$fileUploadBox.addClass("file-upload-box-with-file")
this.render()
this.$fileUploadBox.parent().append(v({...this.model.present(),fileUploaded:true}))
return this.trigger("attachmentManipulationComplete")}deleteAttachment(e){e.preventDefault()
this.$attachmentID.val("").trigger("change")
this.$fileUploadBox.removeClass("file-upload-box-with-file")
this.$fileUpload.val(null)
const t=this.model.present()
this.model.clear()
this.removeFileStatusMessage()
this.render()
this.$fileUploadBox.parent().append(v(t))
return this.trigger("attachmentManipulationComplete")}}y.initClass()
var k=n("C8i9")
var x=n("FdVj")
let w=false
let E=false
var T=function(e=true){w=e
if(E)return
E=true
o()(window).bind({blur(e){w&&document.activeElement&&window===e.target&&o()(document.activeElement).filter(":input").change().triggerHandler("blur")},focus(e){w&&document.activeElement&&window===e.target&&o()(document.activeElement).filter(":input").triggerHandler("focus")}})}
var R=n("Y/W1")
var O=n.n(R)
var S=n("dbrX")
var C=l.a.default
var D=C.template,j=C.templates=C.templates||{}
var N="/work/canvas-deploy/generated/ui/features/take-quiz/jst/LDBLoginPopup"
j[N]=D((function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
a=a||{}
var r,o,s="",l=n.helperMissing,c=this.escapeExpression
s+='<form id="ldb_deauthorized_dialog" class="hide">\n  <div id="unauthorized_message" class="ui-state-error">\n    <h2 class="">'+c((r=n.t||t&&t.t,o={hash:{scope:"quizzes.ldb_login_popup"},data:a},r?r.call(t,"titles.log_in","Please Log In",o):l.call(t,"t","titles.log_in","Please Log In",o)))+"</h2>\n    <p>"+c((r=n.t||t&&t.t,o={hash:{w0:"<strong>$1</strong>",scope:"quizzes.ldb_login_popup"},data:a},r?r.call(t,"logged_out_of_canvas","*You have been logged out of canvas.* To continue please log in.",o):l.call(t,"t","logged_out_of_canvas","*You have been logged out of canvas.* To continue please log in.",o)))+'\n    </p>\n  </div>\n\n  <h1>Canvas</h1>\n\n  <div>\n    <span class="field">\n      <label for="pseudonym_session_unique_id">'+c((r=n.t||t&&t.t,o={hash:{scope:"quizzes.ldb_login_popup"},data:a},r?r.call(t,"email","Email",o):l.call(t,"t","email","Email",o)))+'</label>\n      <input id="pseudonym_session_unique_id" type="text" name="pseudonym_session[unique_id]" class="text" placeholder="'+c((r=n.t||t&&t.t,o={hash:{scope:"quizzes.ldb_login_popup"},data:a},r?r.call(t,"email","Email",o):l.call(t,"t","email","Email",o)))+'" autocomplete="off" />\n    </span>\n\n    <span class="field">\n      <label for="pseudonym_session_password">'+c((r=n.t||t&&t.t,o={hash:{scope:"quizzes.ldb_login_popup"},data:a},r?r.call(t,"password","Password",o):l.call(t,"t","password","Password",o)))+'</label>\n      <input id="pseudonym_session_password" type="password" name="pseudonym_session[password]" class="text" placeholder="'+c((r=n.t||t&&t.t,o={hash:{scope:"quizzes.ldb_login_popup"},data:a},r?r.call(t,"password","Password",o):l.call(t,"t","password","Password",o)))+'" autocomplete="off" />\n    </span>\n  </div>\n\n  <div class="dialog-actions">\n    <span class="btn btn-primary">'+c((r=n.t||t&&t.t,o={hash:{scope:"quizzes.ldb_login_popup"},data:a},r?r.call(t,"log_in","Log In",o):l.call(t,"t","log_in","Log In",o)))+"</span>\n  </div>\n</form>"
return s}))
S["a"].loadStylesheetForJST({id:"9c",bundle:"jst/quizzes/LDBLoginPopup"})
var A=j[N]
var B=n("gI0r")
n("tHpF")
function I(e){if(!e)return
e.preventDefault&&e.preventDefault()
e.stopPropagation&&e.stopPropagation()
return false}class L extends a.a.View{static initClass(){this.prototype.url="/login/canvas"
this.prototype.template=A
this.prototype.options={sticky:true,window:{location:false,menubar:false,status:false,toolbar:false,fullscreen:false,width:480,height:480}}}initialize(e){let t
let n
const i=o()(this)
let a
O.a.extend(this.options,e)
const r=O.a.map(this.options.window,(e,t)=>[t,O.a.isBoolean(e)?e?"yes":"no":e].join("=")).join(",")
this.on=i.on.bind(i)
this.one=i.one.bind(i)
this.off=i.off.bind(i)
function s(){if(t)try{t.document}catch(e){if(/Permission/.test(e.message))return true}return false}function l(){d()
t=null
i.triggerHandler("close")
return null}function c(e){if(s()){l()
return true}try{t.document.focus()}catch(e){o()(t.document).focus()}return I(e)}const u=()=>a.appendTo(document.body)
var d=()=>a.detach()
const h=e=>{const n=I(e)
const a=o()(e.target).closest("form").toJSON()
const r=this.authenticate(a)
r.then(e=>{i.triggerHandler("login_success")
t.close()
l()
return e})
r.fail(e=>{i.triggerHandler("login_failure",e)
return e})
return n}
function f(){const e=o()(t.document)
const a=o()(t.document.head)
O()(n).each(e=>{a.append(`<link rel="stylesheet" href="${Object(B["a"])(e)}" />`)})
e.find(".hide").removeClass("hide")
e.find(".btn-primary").on("click",h)
i.triggerHandler("open",t.document)}this.exec=()=>{s()&&l()
if(t){c()
return t}u()
t=window.open("about:blank","_blank",r,false)
t.document.write(this.template({}))
t.onbeforeunload=l
t.onload=f
t.document.close()
return t}
n=O()(document.styleSheets).chain().map(e=>e.href).compact().value()
a=o()("<div />").on("click",c).css({"z-index":1e3,position:"fixed",left:0,right:0,top:0,bottom:0})
if(this.options.sticky){let e
this.on("login_failure.sticky",()=>e=true)
this.on("login_success.sticky",()=>e=false)
return this.on("close.sticky",(function(){e&&setTimeout(this.exec,1)}))}}authenticate(e){return o.a.ajax({type:"POST",url:this.url,data:JSON.stringify(e),global:false,headers:{"Content-Type":"application/json",Accept:"application/json"}})}}L.initClass()
var q=n("5hhv")
var z=n.n(q)
var G=n("ko/W")
var U=n("EwH5")
var M=n("Ce78J")
n("dhbk")
n("7AEQ")
n("ESjL")
n("r2Yr")
n("w2hD")
n("w4it")
const Q=Object(c["useScope"])("quizzes.take_quiz")
M["a"].preloadRemoteModule()
let H=null
let P=null
let V
const J=function(){let e=0,t=o()(".end_at"),n=t.text()&&new Date(t.text()),i=o()(".due_at"),a=i.text()&&new Date(i.text()),r=o()(".started_at"),s=o()(".countdown_seconds"),l=o()(".time_running,.time_remaining"),c=o()("#last_saved_indicator")
const u=o()(".timer_autosubmit_disabled"),d="true"===u.text(),h=o()(".end_at_without_time_limit"),f=h.text()&&new Date(h.text())
const p=function(){if(l.length>0)return l
return l=o()(".time_running,.time_remaining")}
return{countDown:null,fiveMinuteDeadline:false,oneMinuteDeadline:false,submitting:false,dialogged:false,inBackground:false,contentBoxCounter:0,lastSubmissionUpdate:new Date,currentlyBackingUp:false,endAt:t,endAtParsed:n,timerAutosubmitDisabledParsed:d,endAtWithoutTimeLimitParsed:f,timeToEndWithoutTimeLimit:f&&f-new Date,startedAt:r,hasTimeLimit:!!ENV.QUIZ.time_limit,timeLeft:1e3*parseInt(o()(".time_left").text()),timeToDueDate:a-new Date,oneAtATime:o()("#submit_quiz_form").hasClass("one_question_at_a_time"),cantGoBack:o()("#submit_quiz_form").hasClass("cant_go_back"),finalSubmitButtonClicked:false,clockInterval:500,backupsDisabled:document.location.search.search(/backup=false/)>-1,clearAccessCode:true,updateSubmission(e,n){if(J.backupsDisabled){console.log("[updateSubmission] Aborting because backups are disabled")
return}if(J.submitting&&!e){console.log("[updateSubmission] Aborting because submission is in process and repeat is disabled")
return}const i=new Date
if(!n&&i-J.lastSubmissionUpdate<1e3)return
if(J.currentlyBackingUp){console.log("[updateSubmission] Aborting because submission is currently being backed up")
return}J.currentlyBackingUp=true
J.lastSubmissionUpdate=new Date
const a=o()("#submit_quiz_form").getFormData()
o()(".question_holder .question").each((function(){const e=o()(this).hasClass("marked")?"1":""
a[o()(this).attr("id")+"_marked"]=e}))
c.text(Q.t("saving","Saving..."))
const r=o()(".backup_quiz_submission_url").attr("href");(function(n){const i=O.a.clone(n)
if(!J.inBackground&&e&&O.a.isEqual(n,P)){c.text(Q.t("saving_not_needed","No new data to save. Last checked at %{t}",{t:o.a.friendlyDatetime(new Date)}))
J.currentlyBackingUp=false
setTimeout(()=>{J.updateSubmission(true,true)},3e4)
return}o.a.ajaxJSON(r,"PUT",n,n=>{P=i
c.text(Q.t("saved_at","Quiz saved at %{t}",{t:o.a.friendlyDatetime(new Date)}))
J.currentlyBackingUp=false
J.inBackground=false
e&&setTimeout(()=>{J.updateSubmission(true,true)},3e4)
if(n&&n.end_at){const e=Date.parse(n.end_at),i=Date.parse(t.text()),a=e.getTime(),r=i.getTime()
J.timeLeft=1e3*n.time_left
if(a!==r){a>r?o.a.flashMessage(Q.t("You have been given extra time on this attempt")):o.a.flashMessage(Q.t("Your time for this quiz has been reduced."))
J.endAt.text(n.end_at)
J.endAtParsed=e}}n&&n.hard_end_at&&(J.endAtWithoutTimeLimitParsed=Date.parse(n.hard_end_at))},(t,n)=>{J.currentlyBackingUp=false
if(401===n.status||"unauthorized"==t.status){V();-1===o.a.inArray(n,o.a.ajaxJSON.ignoredXHRs)&&o.a.ajaxJSON.ignoredXHRs.push(n)}else if(403===n.status||"forbidden"==t.status)window.location.reload()
else{const e=window.ENV.current_user_id||"none"
o.a.ajaxJSON(location.protocol+"//"+location.host+"/simple_response.json?user_id="+e+"&rnd="+Math.round(9999999*Math.random()),"GET",{},()=>{},()=>{o.a.flashError(Q.t("errors.connection_lost","Connection to %{host} was lost.  Please make sure you're connected to the Internet before continuing.",{host:location.host}))})}e&&setTimeout(()=>{J.updateSubmission(true)},3e4)},{timeout:15e3})})(a)},updateTime(){let t=J.timeLeft-=J.clockInterval
let n=null
J.timeToDueDate>0&&(n=J.timeToDueDate-=J.clockInterval)
const i=new Date
const a=J.endAt.text()
e=(e+1)%120
if(0==e&&!a&&!J.twelveHourDeadline){J.endAtParsed}t=J.floorTimeLeft(t)
if(J.countDown){const e=new Date(J.countDown-i.getTime()).getUTCSeconds()
i.getTime()<J.countDown&&s.text(e)
if(e<=0&&!J.submitting&&J.shouldSubmitAtEndAt()){J.submitting=true
J.submitQuiz()}}if(J.isTimeUp(t)&&!ENV.IS_PREVIEW)J.showTimeUpDialog(i)
else if(null!=n&&t>n){J.showDueDateWarnings(n)
J.showWarnings(t)}else null==t?J.showDueDateWarnings(n):J.showWarnings(t)
J.updateTimeDisplay(t)
J.endAtWithoutTimeLimitParsed&&(J.timeToEndWithoutTimeLimit-=J.clockInterval)
if(J.timerAutosubmitDisabledParsed&&!!J.endAtWithoutTimeLimitParsed&&J.endAtWithoutTimeLimitParsed.getTime()!==J.endAtParsed.getTime()&&J.timeToEndWithoutTimeLimit<1e3&&!J.submitting){J.submitting=true
J.submitQuiz()}},shouldSubmitAtEndAt:()=>!J.timerAutosubmitDisabledParsed||!!J.endAtWithoutTimeLimitParsed&&J.endAtWithoutTimeLimitParsed.getTime()===J.endAtParsed.getTime(),floorTimeLeft(e){e<1e3&&(e=0)
return e},isTimeUp:e=>e<1e3&&!J.dialogged,showDueDateWarnings(e){if(e>3e4&&e<6e4&&!J.oneMinuteDueDateDeadline){J.oneMinuteDueDateDeadline=true
o.a.flashMessage(Q.t("notices.due_date_one_minute_left","One Minute Left Before Quiz Will Be Marked Late"))}else if(e>25e4&&e<3e5&&!J.fiveMinuteDueDateDeadline){J.fiveMinuteDueDateDeadline=true
o.a.flashMessage(Q.t("notices.due_date_five_minutes_left","Five Minutes Left Before Quiz Will Be Marked Late"))}else if(e>177e4&&e<18e5&&!J.thirtyMinuteDueDateDeadline){J.thirtyMinuteDueDateDeadline=true
o.a.flashMessage(Q.t("notices.due_date_thirty_minutes_left","Thirty Minutes Left Before Quiz Will Be Marked Late"))}},showWarnings(e){if(e>3e4&&e<6e4&&!J.oneMinuteDeadline){J.oneMinuteDeadline=true
o.a.flashWarning(Q.t("notices.submission_one_minute_left","This Quiz Will Be Submitted In One Minute"),5e3)}else if(e>25e4&&e<3e5&&!J.fiveMinuteDeadline){J.fiveMinuteDeadline=true
o.a.flashWarning(Q.t("notices.submission_five_minutes_left","This Quiz Will Be Submitted In Five Minutes"),5e3)}else if(e>177e4&&e<18e5&&!J.thirtyMinuteDeadline){J.thirtyMinuteDeadline=true
o.a.flashWarning(Q.t("notices.submission_thirty_minutes_left","This Quiz Will Be Submitted In Thirty Minutes"),5e3)}},showTimeUpDialog(e){J.dialogged=true
J.countDown=new Date(e.getTime()+1e4)
o()("#times_up_dialog").show().dialog({title:Q.t("titles.times_up","Time's Up!"),width:"auto",height:"auto",modal:true,overlay:{backgroundColor:"#000",opacity:.7},close(){if(!J.submitting&&J.shouldSubmitAtEndAt()){J.submitting=true
J.submitQuiz()}}})},getTimeElapsed(){o()(".time_header").text(Q.beforeLabel(Q.t("labels.time_elapsed","Time Elapsed")))
const e=(new Date).getTime()
const t=Date.parse(J.startedAt.text()).getTime()
return e-t},updateTimeDisplay(e){J.hasTimeLimit?J.updateTimeString(e):J.updateTimeString(J.getTimeElapsed())},updateTimeString(e){const t=new Date(Math.abs(e))
const n=t.getUTCFullYear()-1970
const i=t.getUTCMonth()
const a=t.getUTCDate()-1
const r=t.getUTCHours()
const s=t.getUTCMinutes()
const l=t.getUTCSeconds()
if(Number.isNaN(Number(s))||Number.isNaN(Number(l))){o()(".time_header").hide()
o()(".hide_time_link").hide()
o()(".time_running").css("color","#EA0611")
p().text(Q.t("Your browser connectivity may be slow or unstable. In spite of your browser's timer being disconnected, your answers will be recorded for an additional 5 minutes beyond the original time limit on this attempt."))
return}const c=[]
n&&c.push(Q.t("years_count","Year",{count:n}))
i&&c.push(Q.t("months_count","Month",{count:i}))
a&&c.push(Q.t("days_count","Day",{count:a}))
r&&c.push(Q.t("hours_count","Hour",{count:r}))
c.push(Q.t("minutes_count","Minute",{count:s}))
c.push(Q.t("seconds_count","Second",{count:l}))
p().text(c.join(", "))},updateFinalSubmitButtonState(){const e=0==o()("#question_list li:not(.answered, .text_only)").length
const t=o()("#submit_quiz_form").hasClass("last_page")
const n=o()("div.question.answered").length>0
const i=J.oneAtATime
const a=i&&t&&n||e
J.toggleActiveButtonState("#submit_quiz_button",a)},updateQuestionIndicators(e,t){const n="#list_"+t
const i="#"+t
const a=n+", "+i
const r=o()(n+" i.placeholder")
if(e){o()(a).addClass("answered")
r.addClass("icon-check").removeClass("icon-question")
r.find(".icon-text").text(Q.t("question_answered","Answered"))}else{o()(a).removeClass("answered")
r.addClass("icon-question").removeClass("icon-check")
r.find(".icon-text").text(Q.t("question_unanswered","Haven't Answered Yet"))}},updateNextButtonState(e){const t=o()("#"+e)
J.toggleActiveButtonState("button.next-question",t.hasClass("answered"))},toggleActiveButtonState(e,t){const n=t?"btn-primary":"btn-secondary"
const i=t?"btn-secondary":"btn-primary"
o()(e).addClass(n).removeClass(i)},submitQuiz(){const e=o()("#submit_quiz_button")
e.prop("disabled",true)
const t=e.data("action")
o()("#submit_quiz_form").attr("action",t).submit()}}}()
o()(window).focus(e=>{J.updateSubmission()})
o()(window).blur(e=>{J.inBackground=true})
o()(document).mousedown(e=>{H=o()(e.target).parents(".answer")[0]}).keydown(()=>{H=null})
o()("a[href^='#']").not("a[href='#']").click((function(){o()(o()(this).attr("href")).attr("tabindex",-1).focus()}))
o()((function(){T()
if(0==o()("#preview_mode_link").length){let e=false
window.addEventListener("beforeunload",t=>{if(!J.navigatingToRelogin&&!J.submitting&&!J.alreadyAcceptedNavigatingAway&&!e){J.clearAccessCode=true
setTimeout(()=>{e=false},0)
e=true
t.returnValue=Q.t("confirms.unfinished_quiz","You're about to leave the quiz unfinished.  Continue anyway?")
return t.returnValue}})
window.addEventListener("unload",e=>{const t=o()("#submit_quiz_form").getFormData()
const n=o()(".backup_quiz_submission_url").attr("href")
t.leaving=!!J.clearAccessCode
o.a.flashMessage(Q.t("Saving..."))
o.a.ajax({url:n,data:t,type:"POST",dataType:"json",async:false})
J.currentlyBackingUp=false},false)
o()(document).delegate("a","click",(function(e){if(o()(this).closest(".ui-dialog,.mceToolbar,.ui-selectmenu").length>0)return
if(o()(this).hasClass("no-warning")){J.alreadyAcceptedNavigatingAway=true
return}if(o()(this).hasClass("file_preview_link"))return
if(!e.isDefaultPrevented()){const t=o()(this).attr("href")||""
let n=location.href
n.indexOf("#")&&(n=n.substring(0,n.indexOf("#")))
if(0==t.indexOf("#")||0==t.indexOf(n+"#"))return
const i=confirm(Q.t("confirms.navigate_away","You're about to navigate away from this page.  Continue anyway?"))
i?J.alreadyAcceptedNavigatingAway=true:e.preventDefault()}}))}const e=o()("#questions")
o()("#question_list").delegate(".jump_to_question_link","click",(function(e){e.preventDefault()
const t=o()(o()(this).attr("href"))
const n=ENV.MOBILE_UI?"#content":"html,body"
o()(n).scrollTo(t.parent())
t.find(":input:first").focus().select()})).find(".list_question").bind({mouseenter(e){const t=o()(this),n=t.data()
if(!J.oneAtATime){n.relatedQuestion||(n.relatedQuestion=o()("#"+t.attr("id").substring(5)))
n.relatedQuestion.addClass("related")}},mouseleave(e){if(!J.oneAtATime){const e=o()(this).data("relatedQuestion")
e&&e.removeClass("related")}},click(e){J.clearAccessCode=false}})
e.find(".group_top,.answer_select").bind({mouseenter(e){o()(this).addClass("hover")},mouseleave(e){o()(this).removeClass("hover")}})
o()(".file-upload-question-holder").each((e,t)=>{const n=o()(t)
const i=parseInt(n.find("input.attachment-id").val(),10)
const a=new k["a"](ENV.ATTACHMENTS[i],{preflightUrl:ENV.UPLOAD_URL})
const r=new y({el:t,model:a})
i&&0!==i&&n.find(".file-upload-box").addClass("file-upload-box-with-file")
r.on("attachmentManipulationComplete",()=>{J.updateSubmission()})
r.render()})
e.delegate(":checkbox,:radio","change",(function(e){const t=o()(this).parents(".answer")
H==t[0]&&J.updateSubmission()})).delegate("label.upload-label","mouseup",e=>{J.updateSubmission()}).delegate(":text,textarea,select","change",(function(e,t){const n=o()(this)
if(n.hasClass("numerical_question_input")){const e=x["a"].parse(n.val())
n.val(isNaN(e)?"":Q.n(e.toFixed(4),{strip_insignificant_zeros:true}))}if(n.hasClass("precision_question_input")){const e=x["a"].parse(n.val())
const t=e.toString()
const i=t.length-(t.includes(".")?1:0)
n.val(Number.isNaN(e)?"":Q.n(e.toPrecision(i),{strip_insignificant_zeros:true,precision:i}))}false!==t&&J.updateSubmission()})).delegate(".numerical_question_input",{keyup(e){const t=o()(this)
const n=t.val()+""
const i=t.data("associated_error_box")
n.match(/^$|^-$/)||x["a"].validate(n)?i&&t.triggerHandler("click"):i||t.errorBox(Q.t("errors.only_numerical_values","only numerical values are accepted"))}}).delegate(".flag_question","click",(function(e){e.preventDefault()
const t=o()(this).parents(".question")
t.toggleClass("marked")
o()(this).attr("aria-checked",t.hasClass("marked"))
o()("#list_"+t.attr("id")).toggleClass("marked")
let n
n=o()("#list_"+t.attr("id")).hasClass("marked")?Q.t("titles.come_back_later","You marked this question to come back to later"):""
o()("#list_"+t.attr("id")).find(".marked-status").text(n)
J.updateSubmission()})).delegate(".question_input","change",(function(e,t,n){let i=o()(this),a=this.tagName.toUpperCase(),r=i.parents(".question").attr("id"),s=""
if("A"==a)return
if(n){if(n[r])return
n[r]=true}if("TEXTAREA"==a){s=M["a"].callOnRCE(i,"get_code")
const e=i
i.siblings(".rce_links").find(".toggle_question_content_views_link").click((function(t){t.preventDefault()
M["a"].callOnRCE(e,"toggle")
o()(this).siblings(".toggle_question_content_views_link").andSelf().toggle()}))}else if("text"==i.attr("type")||"hidden"==i.attr("type"))s=i.val()
else if("SELECT"==a){const e=i.parents(".question").find("select.question_input")
s=!e.filter((function(){return!o()(this).val()})).length}else i.parents(".question").find(".question_input").each((function(){(o()(this).attr("checked")||o()(this).attr("selected"))&&(s=true)}))
J.updateQuestionIndicators(s,r)
J.updateFinalSubmitButtonState()
J.updateNextButtonState(r)}))
e.find(".question_input").trigger("change",[false,{}])
const t=o()(".hide_time_link")
t.click((function(e){e.preventDefault()
if("hidden"!==o()(".time_running").css("visibility")){o()(".time_running").css("visibility","hidden")
o()(this).text(Q.t("show_time_link","Show Time"))}else{o()(".time_running").css("visibility","visible")
o()(this).text(Q.t("hide_time_link","Hide Time"))}}))
t.keydown((function(e){32===e.keyCode&&t.click()}))
setTimeout((function(){o()("#question_list .list_question").each((function(){const e=o()(this)
"Spacer"==e.find(".jump_to_question_link").text()&&e.remove()}))}),1e3)
o()("#submit_quiz_form input[type=text]").keypress(e=>{if(13==e.keyCode)return false})
o()(".quiz_submit").click(e=>{J.finalSubmitButtonClicked=true})
o()("#submit_quiz_form").submit((function(t){o()(".question_holder textarea.question_input").each((function(){o()(this).change()}))
let n
let i
J.cantGoBack&&(o()(".question").hasClass("answered")||(i=Q.t("confirms.cant_go_back_blank","You can't come back to this question once you hit next. Are you sure you want to leave it blank?")))
if(J.finalSubmitButtonClicked){J.finalSubmitButtonClicked=false
if(J.cantGoBack){const e=o()("#question_list .list_question:not(.seen)").length
e>0&&(i=Q.t("confirms.unseen_questions",{one:"There is still 1 question you haven't seen yet.  Submit anyway?",other:"There are still %{count} questions you haven't seen yet.  Submit anyway?"},{count:e}))}else{n=o()("#question_list .list_question:not(.answered):not(.text_only)").length
n>0&&(i=Q.t("confirms.unanswered_questions",{one:"You have 1 unanswered question (see the right sidebar for details).  Submit anyway?",other:"You have %{count} unanswered questions (see the right sidebar for details).  Submit anyway?"},{count:n}))}}0!==o()('#fileupload_in_progress[value="true"]',e).length&&(i=Q.t("confirms.file_upload_in_progress","File upload is in progress. You may lose your answer before it is complete."))
if(void 0!=i&&!J.submitting){const e=confirm(i)
if(!e){t.preventDefault()
t.stopPropagation()
return false}}J.submitting=true}))
o()(".submit_quiz_button").click(e=>{e.preventDefault()
o()("#times_up_dialog").dialog("close")})
setTimeout((function(){o()(".question_holder textarea.question_input").each((function(){o()(this).attr("id","question_input_"+J.contentBoxCounter++)
M["a"].loadNewEditor(o()(this),{manageParent:true,autosave:{enabled:false},maxInitRenderedRCEs:5})}))}),2e3)
if(z.a){z.a.addEventListener("message",e=>{"stopwatchTick"===e.data&&J.updateTime()})
z.a.postMessage({code:"startStopwatch",frequency:J.clockInterval})}else setInterval(J.updateTime,J.clockInterval)
setTimeout(()=>{J.updateSubmission(true)},15e3)
const n=o()("#submit_quiz_form button[type=submit]")
n.click((function(e){J.clearAccessCode=false
const t=o()(this).data("action")
void 0!=t&&o()("#submit_quiz_form").attr("action",t)}))
n.removeAttr("disabled")}))
V=function(){o()("#deauthorized_dialog").dialog({modal:true,buttons:[{text:Q.t("#buttons.cancel","Cancel"),class:"dialog_closer",click(){o()(this).dialog("close")}},{text:Q.t("#buttons.login","Login"),class:"btn-primary relogin_button button_type_submit",click(){J.navigatingToRelogin=true
o()("#deauthorized_dialog").submit()}}]})}
if(ENV.LOCKDOWN_BROWSER){let e
e=new L
e.on("login_success.take_quiz",()=>{o.a.flashMessage(Q.t("login_successful","Login successful."))}).on("login_failure.take_quiz",()=>{o.a.flashError(Q.t("login_failed","Login failed."))})
V=e.exec.bind(e)}o()(()=>{const e=84
const t=o()(".time_running,.time_remaining")
const n=o()("<div />",{class:"screenreader-only","aria-role":"note","aria-live":"assertive","aria-atomic":"true","aria-relevant":"additions"}).appendTo(document.body)
o()(document).on("keydown.timer_quickjump",(function(i){if(i.altKey&&(i.shiftKey||i.ctrlKey)&&i.which===e){i.preventDefault()
n.text(t.text())}}))
if(ENV.QUIZ_SUBMISSION_EVENTS_URL){G["a"].start()
Object(U["a"])(false)}})
o()(document).ready(()=>{o()(".loaded").show()
o()(".loading").hide()})},"5hhv":function(e,t,n){var i,a
i=[],a=function(){if(!window.Worker)return
function e(){let e
self.addEventListener("message",(function(t){const n=t.data||{}
switch(n.code){case"startStopwatch":e=setInterval((function(){self.postMessage("stopwatchTick")}),n.frequency||1e3)
break
case"stop":clearInterval(e)}}),false)}let t=e.toString()
t=t.substring(t.indexOf("{")+1,t.lastIndexOf("}"))
const n=new Blob([t],{type:"application/javascript"})
const i=new Worker(URL.createObjectURL(n))
return i}.apply(t,i),void 0!==a&&(e.exports=a)},"65NJ":function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
n("w2hD")
a.a.fn.scrollToVisible=function(e){const t={}
const n=a()(e)
if(0===n.length)return
let i=n.offset(),r=n.outerWidth(),o=n.outerHeight(),s=i.top,l=s+o,c=i.left,u=c+r,d="html,body"==this.selector?a.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),f=this.outerHeight(),p=this.outerWidth()
if("html,body"!=this.selector){let e=a()("body").offset()
this.each((function(){try{e=a()(this).offset()
return false}catch(e){}}))
s-=e.top
l-=e.top
c-=e.left
u-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){f=a()(window).height()
a()("#wizard_box:visible").length>0&&(f-=a()("#wizard_box:visible").height())
p=a()(window).width()
s-=d
c-=h
l-=d
u-=h}s<0||f<o&&l>f?t.scrollTop=s+d:l>f&&(t.scrollTop=l+d-f+20)
c<0?t.scrollLeft=c+h:u>p&&(t.scrollLeft=u+h-p+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},BrAc:function(e,t,n){"use strict"
var i=n("vDqi")
var a=n.n(i)
a.a.defaults.xsrfCookieName="_csrf_token"
a.a.defaults.xsrfHeaderName="X-CSRF-Token"
const r=a.a.defaults.headers.common.Accept
a.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+r
a.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
t["a"]=a.a},C8i9:function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
var r=n("Y/W1")
var o=n.n(r)
var s=n("QYKH")
var l=n("EyBU")
n("dhbk")
var c=function(e,t){return function(){return e.apply(t,arguments)}},u=function(e,t){for(var n in t)d.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},d={}.hasOwnProperty,h=[].slice
t["a"]=function(e){u(t,e)
function t(){this.externalToolEnabled=c(this.externalToolEnabled,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.url=function(){return this.isNew()?t.__super__.url.apply(this,arguments):"/api/v1/files/"+this.id}
t.prototype.initialize=function(e,n){null==n&&(n={})
this.preflightUrl=n.preflightUrl
return t.__super__.initialize.apply(this,arguments)}
t.prototype.save=function(e,n){var i,r,o,s,c,u
null==e&&(e={})
null==n&&(n={})
if(!this.get("file"))return t.__super__.save.apply(this,arguments)
this.set(e)
i=a.a.Deferred()
c=(d=this,function(e){d.set(e)
i.resolve(e)
return"function"===typeof n.success?n.success(e):void 0})
var d
s=function(e){i.reject(e)
return"function"===typeof n.error?n.error(e):void 0}
r=this.get("file")
o=(r.value||r.name).split(/[\/\\]/).pop()
r=r.files[0]
u={name:o,on_duplicate:"rename"}
Object(l["uploadFile"])(this.preflightUrl,u,r).then(c)["catch"](s)
return i}
t.prototype.isFile=true
t.prototype.toJSON=function(){var e
if(!this.get("file"))return t.__super__.toJSON.apply(this,arguments)
return o.a.pick.apply(o.a,[this.attributes,"file"].concat(h.call(o.a.keys(null!=(e=this.uploadParams)?e:{}))))}
t.prototype.present=function(){return o.a.clone(this.attributes)}
t.prototype.externalToolEnabled=function(e){var t
if(e.accept_media_types&&e.accept_media_types.length>0){t=this.get("content-type")
return o.a.find(e.accept_media_types.split(","),(function(e){var n
n=new RegExp("^"+e.replace("*",".*")+"$")
return t.match(n)}))}return true}
return t}(s["a"])},"CO+y":function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var i=n("Ff2n")
var a=n("1OyB")
var r=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("17x9")
var d=n.n(u)
var h=n("KgFQ")
var f=n("jtGx")
var p=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(a["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.children,a=Object(i["a"])(e,["children"])
var r=Object(h["a"])(n,this.props)
return c.a.createElement(r,Object.assign({},Object(f["b"])(a),{"aria-hidden":"true"}),t)}}])
n.displayName="PresentationContent"
return n}(l["Component"])
p.propTypes={as:d.a.elementType,children:d.a.node}
p.defaultProps={as:"span",children:null}},Ce78J:function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
var r=n("Y/W1")
var o=n.n(r)
var s=n("JiFB")
var l=n("ik22")
function c(e,t,n){const i={...n}
e.forEach(e=>{const a=t[e]
const r=n[e]
Array.isArray(a)&&Array.isArray(r)&&(i[e]=[...new Set(a.concat(r))])})
return i}function u(e,t,n,i,a){const r=new s["a"](a,l["a"],e,t)
const o={...r.defaultConfig()}
return{...o,...c(n.optionsToMerge||[],o,n.tinyOptions)}}var d=u
var h=n("FNQM")
const f={call(e,...t){if("exists?"===e)return true
return this[e](...t)},focus(){if(void 0!==tinymce){const e=tinymce.get(this.getTextarea().id)
e&&e.focus(true)}}}
const p={show(){$("#editor_tabs").show()},hide(){$("#editor_tabs").hide()}}
const m={wrapEditor(e){const t={...f,...e}
return Object.assign(e,t)},wrapSidebar(e){const t={...p,...e}
return Object.assign(e,t)}}
var g=m
var _=n("eVns")
var b=n("stQK")
var v=n("TiZd")
const y={loadingPromise:null,preload(e){(window.requestIdleCallback||window.setTimeout)(()=>this.loadRCE(e))},loadOnTarget(e,t,n){const i=this.getTargetTextarea(e)
const a=this.getRenderingTarget(i,t.getRenderingTarget)
const r=this.createRCEProps(i,t)
this.loadRCE(e=>{e.renderIntoDiv(a,r,e=>{e.tinymceOn("init",()=>n(i,g.wrapEditor(e)))})})},loadingCallbacks:[],RCE:null,loadRCE(e=(()=>{})){return Promise.all([n.e(6),n.e(7),n.e(8),n.e(10),n.e(11),n.e(12),n.e(15),n.e(17),n.e(19),n.e(20),n.e(23),n.e(28),n.e(41),n.e(3746)]).then(n.bind(null,"j/Fk")).then(e=>{this.RCE=e
Object(h["a"])()
return e}).then(()=>{this.loadingCallbacks.forEach(e=>e(this.RCE))
this.loadingCallbacks=[]
e(this.RCE)})},getTargetTextarea:e=>"textarea"===a()(e).get(0).type?a()(e).get(0):a()(e).find("textarea").get(0),getRenderingTarget(e,t){let n
n="undefined"===typeof t?a()(e).parent().get(0):t(e)
a()(n).addClass("ic-RichContentEditor")
return n},_attrsToMirror(e){const t=["name"]
const n=o.a.reduce(e.attributes,(e,t)=>{e[t.name]=t.value
return e},{})
return o.a.pick(n,t)},createRCEProps(e,t){var n,i
const a=e.offsetWidth
const r=e.offsetHeight||400
r&&(t.tinyOptions={height:r,...t.tinyOptions||{}})
const o=ENV.LOCALE
const s=Object.keys(b["a"]).map(e=>({id:e,label:b["a"][e]})).sort((e,t)=>e.id===o?-1:t.id===o?1:e.label.localeCompare(t.label,o))
const l={enabled:true,maxAge:Number.isNaN(ENV.rce_auto_save_max_age_ms)?36e5:ENV.rce_auto_save_max_age_ms}
return{defaultContent:e.value||t.defaultContent,editorOptions:d.bind(null,a,e.id,t,null),language:ENV.LOCALE,mirroredAttrs:this._attrsToMirror(e),onFocus:t.onFocus,onBlur:t.onBlur,textareaClassName:e.className,textareaId:e.id,trayProps:Object(_["a"])(),languages:s,liveRegion:()=>document.getElementById("flash_screenreader_holder"),ltiTools:null===(n=window.INST)||void 0===n?void 0:n.editorButtons,autosave:t.autosave||l,instRecordDisabled:ENV.RICH_CONTENT_INST_RECORD_TAB_DISABLED,maxInitRenderedRCEs:t.maxInitRenderedRCEs,highContrastCSS:null===(i=window.ENV)||void 0===i?void 0:i.url_for_high_contrast_tinymce_editor_css,use_rce_buttons_and_icons:Object(v["b"])(v["a"].ButtonsAndIcons,window.ENV)}}}
var k=y
var x=n("eodz")
function w(e,t,n){e.css("display","none")
const i=t.onFocus
t.onFocus=(...e)=>{i instanceof Function&&i(...e)}
k.loadOnTarget(e,t,(t,i)=>{const r=j(e)
const o=C(a()(t))
o.data("remoteEditor",i)
r.trigger(x["a"],i)
n&&n(i)})}function E(e){const t=j(e)
const n=t.attr("id")
const i="tinymce-parent-of-"+n
if(t.parent().attr("id")!==i)return t.wrap(`<div id='${i}' style='visibility: hidden'></div>`)}function T(){a()(".mce-resizehandle").attr("aria-hidden",true)}let R=0
function O(){return"random_editor_id_"+R++}function S(e){const t=a()(e)
const n="attr"in t?t.attr("id"):t.id
n&&""!=n||t.attr("id",O())}function C(e){const t=j(e)
const n=t.attr("id")
if(!n||""==n)return t
const i=a()("#"+n)
if(i.length<=0)return t
return i}const D={preloadRemoteModule:(e=(()=>{}))=>k.preload(e),loadNewEditor(e,t={},n){let i=j(e)
if(i.length<=0)return
S(i)
t=a.a.extend({},t)
const r=e=>{t.focus&&this.activateRCE(i)
n&&n(e)}
i=this.freshNode(i)
if(t.manageParent){delete t.manageParent
E(i)}w(i,t,r)
T()},callOnRCE(e,t,...n){let i=j(e)
i=this.freshNode(i)
return Object(x["d"])(i,t,...n)},destroyRCE(e){let t=j(e)
t=this.freshNode(t)
Object(x["b"])(t)},closeRCE(e){this.callOnRCE(e,"RCEClosed")},activateRCE(e){let t=j(e)
t=this.freshNode(t)
Object(x["c"])(t)},freshNode:C,ensureID:S,node2jquery:j}
function j(e){return e&&e.length?e:a()(e)}t["a"]=D},CyAq:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
function i(e){var t="".concat(e)
return[parseFloat(t,10),t.match(/[\d.\-\+]*\s*(.*)/)[1]||""]}},ErZx:function(e,t,n){"use strict"
const i={auto_focus:false,block_formats:void 0,body_class:"default-theme",content_css:[],directionality:"ltr",height:void 0,language:"en",menubar:void 0,menu:void 0,toolbar:void 0,plugins:void 0,branding:false,browser_spellcheck:true,content_style:void 0,convert_urls:false,font_formats:"Lato=lato,Helvetica Neue,Helvetica,Arial,sans-serif; Balsamiq Sans=Balsamiq Sans,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Architect's Daughter=Architects Daughter,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",language_load:false,language_url:"none",toolbar_mode:"floating",toolbar_ticky:true,mobile:{theme:"silver"},preview_styles:"font-family font-size font-weight font-style text-decoration text-transform border border-radius outline text-shadow",remove_script_host:true,resize:true,skin:false,statusbar:false,valid_elements:"@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|role],a[rel|rev|charset|hreflang|tabindex|accesskey|type|name|href|target|title|class],strong/b,em/i,strike/s,u,#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|src|border|alt|title|hspace|vspace|width|height|align|role],-sub,-sup,-blockquote[cite],-table[border=0|cellspacing|cellpadding|width|frame|rules|height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,-div,-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],object[classid|width|height|codebase|*],param[name|value|_value],embed[type|width|height|src|*],map[name],area[shape|coords|href|alt|target],bdo,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|valign|width],dfn,kbd,q[cite],samp,small,tt,var,big,figure,figcaption,source[media|sizes|src|srcset|type],track,mark,article,aside,details,footer,header,nav,section,summary,time",extended_valid_elements:"@[id|accesskey|class|dir|lang|style|tabindex|title|contenteditable|contextmenu|draggable|dropzone|hidden|longdesc|spellcheck|translate|align|role|aria-labelledby|aria-atomic|aria-busy|aria-controls|aria-describedby|aria-disabled|aria-dropeffect|aria-flowto|aria-grabbed|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-labelledby|aria-live|aria-owns|aria-relevant|aria-autocomplete|aria-checked|aria-disabled|aria-expanded|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-level|aria-multiline|aria-multiselectable|aria-orientation|aria-pressed|aria-readonly|aria-required|aria-selected|aria-sort|aria-valuemax|aria-valuemin|aria-valuenow|aria-valuetext],iframe[id|data-media-type|title|src|width|height|name|align|style|class|sandbox|allowfullscreen|webkitallowfullscreen|mozallowfullscreen|allow],i[iclass],a[hidden|href|target|rel|media|hreflang|type|charset|name|rev|shape|coords|download|alt],#p,li[value],-ol[reversed|start|type|compact],pre[width],table[border|summary|width|frame|rules|cellspacing|cellpadding|bgcolor],tbody[char|charoff|valign],td[colspan|rowspan|headers|abbr|axis|scope|align|char|charoff|valign|nowrap|bgcolor|width|height],tfoot[char|charoff|valign],th[colspan|rowspan|headers|scope|abbr|axis|align|char|charoff|valign|nowrap|bgcolor|width|height],thead[char|charoff|valign],tr[char|charoff|valign|bgcolor],-ul[compact],video[name|src|allowfullscreen|muted|poster|width|height|controls|playsinline],audio[name|src|muted|controls],annotation[href|xref|definitionURL|encoding|cd|name|src],annotation-xml[href|xref|definitionURL|encoding|cd|name|src],maction[href|xref|mathcolor|mathbackground|actiontype|selection],maligngroup[href|xref|mathcolor|mathbackground|groupalign],malignmark[href|xref|mathcolor|mathbackground|edge],math[xmlns|href|xref|display|maxwidth|overflow|altimg|altimg-width|altimg-height|altimg-valign|alttext|cdgroup|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],menclose[href|xref|mathcolor|mathbackground|notation],merror[href|xref|mathcolor|mathbackground],mfenced[href|xref|mathcolor|mathbackground|open|close|separators],mfrac[href|xref|mathcolor|mathbackground|linethickness|munalign|denomalign|bevelled],mglyph[href|xref|mathcolor|mathbackground|src|alt|width|height|valign],mi[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mlabeledtr[href|xref|mathcolor|mathbackground],mlongdiv[href|xref|mathcolor|mathbackground|longdivstyle|align|stackalign|charalign|charspacing],mmultiscripts[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],mn[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mo[href|xref|mathcolor|mathbackground|mathvariant|mathsize|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast],mover[href|xref|mathcolor|mathbackground|accent|align],mpadded[href|xref|mathcolor|mathbackground|height|depth|width|lspace|voffset],mphantom[href|xref|mathcolor|mathbackground],mprescripts[href|xref|mathcolor|mathbackground],mroot[href|xref|mathcolor|mathbackground],mrow[href|xref|mathcolor|mathbackground],ms[href|xref|mathcolor|mathbackground|mathvariant|mathsize|lquote|rquote],mscarries[href|xref|mathcolor|mathbackground|position|location|crossout|scriptsizemultiplier],mscarry[href|xref|mathcolor|mathbackground|location|crossout],msgroup[href|xref|mathcolor|mathbackground|position|shift],msline[href|xref|mathcolor|mathbackground|position|length|leftoverhang|rightoverhang|mslinethickness],mspace[href|xref|mathcolor|mathbackground|mathvariant|mathsize],msqrt[href|xref|mathcolor|mathbackground],msrow[href|xref|mathcolor|mathbackground|position],mstack[href|xref|mathcolor|mathbackground|align|stackalign|charalign|charspacing],mstyle[href|xref|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],msub[href|xref|mathcolor|mathbackground|subscriptshift],msubsup[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],msup[href|xref|mathcolor|mathbackground|superscriptshift],mtable[href|xref|mathcolor|mathbackground|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|width|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|displaystyle|side|minlabelspacing],mtd[href|xref|mathcolor|mathbackground|rowspan|columnspan|rowalign|columnalign|groupalign],mtext[href|xref|mathcolor|mathbackground|mathvariant|mathsize|width|height|depth|linebreak],mtr[href|xref|mathcolor|mathbackground|rowalign|columnalign|groupalign],munder[href|xref|mathcolor|mathbackground|accentunder|align],munderover[href|xref|mathcolor|mathbackground|accent|accentunder|align],none[href|xref|mathcolor|mathbackground],semantics[href|xref|definitionURL|encoding],picture,ruby,rp,rt,wbrsvg[*],g[*],circle[*]",non_empty_elements:"td th iframe video audio object script a i area base basefont br col frame hr img input isindex link meta param embed source wbr track ruby",target_list:false,link_title:false,default_link_target:"_blank"}
t["a"]=i},EwH5:function(e,t,n){"use strict"
var i=n("ko/W")
t["a"]=function(e){e&&i["a"].unregisterAllTrackers()
i["a"].isRunning()||i["a"].start()
if(i["a"].isDirty())return i["a"].deliver()}},EyBU:function(e,t,n){"use strict"
n.r(t)
n.d(t,"uploadFile",(function(){return h}))
n.d(t,"completeUpload",(function(){return f}))
n.d(t,"submissionCommentAttachmentsUpload",(function(){return p}))
n.d(t,"uploadFiles",(function(){return m}))
var i=n("BrAc")
var a=n("Qyje")
var r=n.n(a)
var o=n("HGxv")
var s=n("gBVS")
const l=Object(o["useScope"])("upload_file")
function c(e){if("Network Error"===e.message){const t=new Error(l.t("Canvas failed to initiate the upload."))
t.originalError=e
return Promise.reject(t)}return Promise.reject(e)}function u(e){if("Network Error"===e.message){const t=new Error(l.t("Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."))
t.originalError=e
return Promise.reject(t)}return Promise.reject(e)}function d(e){if("Network Error"===e.message){const t=new Error(l.t("Canvas failed to complete the upload."))
t.originalError=e
return Promise.reject(t)}return Promise.reject(e)}function h(e,t,n,a=i["a"],o){if(!n&&!t.url)throw new Error("expected either a file to upload or a url to clone",{file:n,preflightData:t})
if(n&&t.url)throw new Error("can't upload with both a file object and a url to clone",{file:n,preflightData:t})
t.no_redirect=true
t["attachment[context_code]"]&&(t=r.a.stringify(t))
return a.post(e,t).catch(c).then(e=>f(e.data,n,{ajaxLib:a,onProgress:o}))}function f(e,t,n={}){const a=n.ajaxLib||i["a"]
const o=n.ajaxLibOptions||{}
e&&e.attachments&&e.attachments[0]&&(e=e.attachments[0])
if(!e)throw new Error("expected a preflightResponse")
if(t&&!e.upload_url)throw new Error("expected a preflightResponse with an upload_url",{preflightResponse:e})
if(!t&&!e.progress)throw new Error("expected a preflightResponse with a progress",{preflightResponse:e})
const{upload_url:l,progress:c}=e
if(!l)return Object(s["a"])(c,{ajaxLib:a}).catch(d)
let{file_param:h,upload_params:f,success_url:p}=e
h=h||"file"
f=f||{}
p=p||f.success_url
const m=!!p
const g=new FormData
Object.entries(f).forEach(([e,t])=>g.append(e,t))
t&&g.append(h,t,n.filename)
const _=a.post(l,g,{responseType:m?"document":"json",onUploadProgress:n.onProgress,withCredentials:!m,...o})
return _.catch(u).then(e=>{if(c)return Object(s["a"])(c,{ajaxLib:a}).catch(d)
let t,i={}
if(p){const{Bucket:n,Key:a,ETag:r}=e.data
t=p
i={bucket:n,key:a,etag:r}}else if(201===e.status&&!n.ignoreResult){t=e.data.location
i={}}if(t){n.includeAvatar&&(i.include="avatar")
i=r.a.stringify(i)
i&&(t=-1!==t.indexOf("?")?`${t}&${i}`:`${t}?${i}`)
return a.get(t).then(({data:e})=>e).catch(d)}return e.data})}function p(e,t,n){const i=`/api/v1/courses/${t}/assignments/${n}/submissions/self/comments/files`
const a=e.map(e=>{const t={name:e.name,content_type:e.type}
return h(i,t,e)})
return Promise.all(a)}function m(e,t){const n=e.map(e=>e.url?h(t,{url:e.url,name:e.text,content_type:e.mediaType,submit_assignment:false}):h(t,{name:e.name,content_type:e.type},e))
return Promise.all(n)}},FNQM:function(e,t,n){"use strict"
n.d(t,"a",(function(){return E}))
var i=n("RtDj")
var a=n("HGxv")
var r=n("ouhR")
var o=n.n(r)
n("gI0r")
const s=Object(a["useScope"])("ExternalToolsPlugin")
const l=ENV.MAX_MRU_LTI_TOOLS||5
var c={buttonConfig(e,t){const n={title:e.name,classes:"widget btn instructure_external_tool_button"}
n.id=e.id
n.onAction=()=>{t.execCommand("instructureExternalButton"+e.id)
this.updateMRUList(e.id)
this.showHideButtons(t)}
n.description=e.description
n.favorite=e.favorite
n.image=e.icon_url
return n},showHideButtons(e){const t=s.t("Apps")
const n=e.$(e.editorContainer.querySelector(`.tox-tbtn--select[aria-label="${t}"]`))
const i=e.$(e.editorContainer.querySelector(`.tox-tbtn[aria-label="${t}"]`))
n.attr("aria-hidden","false")
i.attr("aria-hidden","true")},updateMRUList(e){let t
try{var n
t=JSON.parse((null===(n=window.localStorage)||void 0===n?void 0:n.getItem("ltimru"))||"[]")}catch(e){console.log("Found bad LTI MRU data",e.message)}finally{Array.isArray(t)||(t=[])}try{if(!t.includes(e)){var i
t.unshift(e)
t.splice(l,t.length)
null===(i=window.localStorage)||void 0===i||i.setItem("ltimru",JSON.stringify(t))}}catch(e){console.log("Cannot save LTI MRU list",e.message)}}}
var u=n("dDTa")
n("q1tI")
var d=n("i8i4")
var h=n.n(d)
const f=Object(a["useScope"])("ExternalToolsPlugin")
const p={init(e,t,a){if(!a||!a.editorButtons||!a.editorButtons.length)return
let r={open:(...e)=>setTimeout(()=>r.open(...e),50)}
Promise.all([n.e(6),n.e(7),n.e(8),n.e(11),n.e(18),n.e(24),n.e(44),n.e(4145)]).then(n.bind(null,"PrO8")).then(({default:t})=>{const n=document.createElement("div")
document.body.appendChild(n)
h.a.render(Object(i["a"])(t,{win:window,editor:e,contextAssetString:ENV.context_asset_string,iframeAllowances:Object(u["a"])(),resourceSelectionUrl:o()("#context_external_tool_resource_selection_url").attr("href"),deepLinkingOrigin:ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN}),n,(function(){r=this}))})
const s=[]
for(let t=0;a.editorButtons&&t<a.editorButtons.length;t++){const n=a.editorButtons[t]
const i=()=>r.open(n)
s.push(c.buttonConfig(n,e))
e.addCommand("instructureExternalButton"+n.id,i)}if(s.length){_(e,s)
b(e,s)
g(e,s)}}}
function m(e,t){if(!t.iconSVG&&t.image){const e=document.createElement("svg")
e.setAttribute("viewBox","0 0 16 16")
e.setAttribute("version","1.1")
e.setAttribute("xmlns","http://www.w3.org/2000/svg")
const n=document.createElement("image")
n.setAttribute("xlink:href",t.image)
n.style.width="100%"
n.style.height="100%"
e.appendChild(n)
t.iconSVG=e.outerHTML
t.icon="lti_tool_"+t.id}t.iconSVG&&e.ui.registry.addIcon(t.icon,t.iconSVG)}function g(e,t){t.length&&e.ui.registry.addNestedMenuItem("lti_tools_menuitem",{text:f.t("Apps"),icon:"lti",getSubmenuItems:()=>v(e,t)})}function _(e,t){t.forEach(t=>{if(!t.favorite)return
m(e,t)
e.ui.registry.addButton("instructure_external_button_"+t.id,{onAction:t.onAction,tooltip:t.title,icon:t.icon,title:t.title})})}function b(e,t){const n=f.t("Apps")
e.ui.registry.addMenuButton("lti_mru_button",{tooltip:n,icon:"lti",fetch(n){n(v(e,t))},onSetup(t){c.showHideButtons(e)}})}function v(e,t){const n=[]
try{const i=JSON.parse(window.localStorage.getItem("ltimru"))
if(i&&Array.isArray(i)&&i.length){const a=t.filter(e=>i.includes(e.id))
a.forEach(t=>{m(e,t)
t.menuItem||(t.menuItem={type:"menuitem",text:t.title,icon:t.icon,onAction:t.onAction})
n.push(t.menuItem)})
n.sort((e,t)=>e.text.localeCompare(t.text))}}catch(e){console.log("Failed building mru menu",e.message)}finally{n.push({type:"menuitem",text:f.t("View All"),onAction:()=>{const e=new CustomEvent("tinyRCE/onExternalTools",{detail:{ltiButtons:t}})
document.dispatchEvent(e)}})}return n}var y=p
var k=n("ik22")
var x=n("uloQ")
const w=Object(a["useScope"])("loadEventListeners")
function E(e={}){const t=["equationCB","equellaCB","externalToolCB"]
t.forEach(t=>{void 0===e[t]&&(e[t]=function(){})})
document.addEventListener("tinyRCE/initEquation",({detail:t})=>{Promise.all([n.e(3),n.e(14),n.e(4167)]).then(n.bind(null,"dIBj")).then(({default:n})=>{const i=new n(t.ed)
e.equationCB(i)}).catch(Object(x["c"])(w.t("Something went wrong loading the equation editor")))})
document.addEventListener("tinyRCE/initEquella",t=>{Promise.all([n.e(3),n.e(4281)]).then(n.bind(null,"IOhY")).then(({default:n})=>{n(t.detail.ed)
e.equellaCB()}).catch(Object(x["c"])(w.t("Something went wrong loading Equella")))})
document.addEventListener("tinyRCE/initExternalTools",t=>{y.init(t.detail.ed,t.detail.url,k["a"])
e.externalToolCB()})}},FdVj:function(e,t,n){"use strict"
var i=n("qJBq")
var a=n.n(i)
var r=n("HGxv")
const o={_parseNumber:a.a,parse(e){if(null==e)return NaN
if("number"===typeof e)return e
let t=o._parseNumber(e.toString(),{thousands:r["default"].lookup("number.format.delimiter"),decimal:r["default"].lookup("number.format.separator")})
isNaN(t)&&(t=o._parseNumber(e))
e.toString().match(/e/)&&isNaN(t)&&(t=parseFloat(e))
return t},validate:e=>!isNaN(o.parse(e))}
t["a"]=o},IRk9:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var i=n("VTBJ")
var a=n("1OyB")
var r=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("hPGw")
var d=c.a.createElement("path",{d:"M797.319865 985.881673L344.771525 1438.43001 533.333333 1626.99182 985.881673 1174.44348 1438.43001 1626.99182 1626.99182 1438.43001 1174.44348 985.881673 1626.99182 533.333333 1438.43001 344.771525 985.881673 797.319865 533.333333 344.771525 344.771525 533.333333z",fillRule:"nonzero",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(a["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){return c.a.createElement(u["a"],Object.assign({},this.props,{name:"IconX",viewBox:"0 0 1920 1920"}),d)}}])
n.displayName="IconXSolid"
return n}(l["Component"])
h.glyphName="x"
h.variant="Solid"
h.propTypes=Object(i["a"])({},u["a"].propTypes)},JiFB:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var i=n("uYtQ")
var a=n("ErZx")
class r{constructor(e,t,n,i){this.baseURL=e.baseURL
this.extraButtons=t.editorButtons
this.instConfig=t
this.viewportWidth=n
this.idAttribute=i}defaultConfig(){var e
return{...a["a"],body_class:null!==(e=window.ENV.FEATURES)&&void 0!==e&&e.canvas_k6_theme||window.ENV.K5_SUBJECT_COURSE||window.ENV.K5_HOMEROOM_COURSE?"elementary-theme":"default-theme",selector:"#"+this.idAttribute,directionality:Object(i["b"])(),plugins:["instructure_equation"],content_css:window.ENV.url_to_what_gets_loaded_inside_the_tinymce_editor_css,style_formats:[{title:"Heading 2",format:"h2"},{title:"Heading 3",format:"h3"},{title:"Heading 4",format:"h4"},{title:"Heading 5",format:"h5"},{title:"Heading 6",format:"h6"}],init_instance_callback:e=>{$("#tinymce-parent-of-"+e.id).css("visibility","visible")},show_media_upload:!!INST.kalturaSettings&&!INST.kalturaSettings.hide_rte_button}}}},L0Ie:function(e,t){if((""+location.search).match(/[?&]debug_js=1/))e.exports=console
else{function n(){}e.exports=["debug","info","log","warn","error"].reduce((e,t)=>{e[t]=n
return e},{})}},Mmr1:function(e,t,n){"use strict"
n.d(t,"a",(function(){return j}))
var i=n("rePB")
var a=n("Ff2n")
var r=n("1OyB")
var o=n("vuIU")
var s=n("Ji7U")
var l=n("LK+K")
n("DEX3")
var c=n("q1tI")
var u=n.n(c)
var d=n("17x9")
var h=n.n(d)
var f=n("TSYQ")
var p=n.n(f)
var m=n("IRk9")
var g=n("6SzX")
var _=n("oXx0")
var b=n("J2CL")
var v=n("nAyT")
var y=n("jtGx")
var k=n("tCl5")
var x=n("C6Zt")
var w=function(e){var t=e.spacing,n=e.stacking
return{offsetMedium:t.medium,offsetSmall:t.small,offsetXSmall:t.xSmall,zIndex:n.above}}
var E,T,R,O,S,C
var D={componentId:"ejhDx",template:function(e){return"\n\n.ejhDx_bGBk{display:inline-block;z-index:".concat(e.zIndex||"inherit","}\n\n.ejhDx_doBn{position:static}\n\n.ejhDx_bQpq,.ejhDx_bxia{position:absolute}\n\n.ejhDx_coHh{top:").concat(e.offsetXSmall||"inherit","}\n\n.ejhDx_cDib{top:").concat(e.offsetSmall||"inherit","}\n\n.ejhDx_faeR{top:").concat(e.offsetMedium||"inherit","}\n\n.ejhDx_bQpq{inset-inline-end:0;inset-inline-start:auto}\n\n[dir=ltr] .ejhDx_bQpq{left:auto;right:0}\n\n[dir=rtl] .ejhDx_bQpq{left:0;right:auto}\n\n.ejhDx_bQpq.ejhDx_coHh{inset-inline-end:").concat(e.offsetXSmall||"inherit",";inset-inline-start:auto}\n\n[dir=ltr] .ejhDx_bQpq.ejhDx_coHh{left:auto;right:").concat(e.offsetXSmall||"inherit","}\n\n[dir=rtl] .ejhDx_bQpq.ejhDx_coHh{left:").concat(e.offsetXSmall||"inherit",";right:auto}\n\n.ejhDx_bQpq.ejhDx_cDib{inset-inline-end:").concat(e.offsetSmall||"inherit",";inset-inline-start:auto}\n\n[dir=ltr] .ejhDx_bQpq.ejhDx_cDib{left:auto;right:").concat(e.offsetSmall||"inherit","}\n\n[dir=rtl] .ejhDx_bQpq.ejhDx_cDib{left:").concat(e.offsetSmall||"inherit",";right:auto}\n\n.ejhDx_bQpq.ejhDx_faeR{inset-inline-end:").concat(e.offsetMedium||"inherit",";inset-inline-start:auto}\n\n[dir=ltr] .ejhDx_bQpq.ejhDx_faeR{left:auto;right:").concat(e.offsetMedium||"inherit","}\n\n[dir=rtl] .ejhDx_bQpq.ejhDx_faeR{left:").concat(e.offsetMedium||"inherit",";right:auto}\n\n.ejhDx_bxia{inset-inline-end:auto;inset-inline-start:0}\n\n[dir=ltr] .ejhDx_bxia{left:0;right:auto}\n\n[dir=rtl] .ejhDx_bxia{left:auto;right:0}\n\n.ejhDx_bxia.ejhDx_coHh{inset-inline-end:auto;inset-inline-start:").concat(e.offsetXSmall||"inherit","}\n\n[dir=ltr] .ejhDx_bxia.ejhDx_coHh{left:").concat(e.offsetXSmall||"inherit",";right:auto}\n\n[dir=rtl] .ejhDx_bxia.ejhDx_coHh{left:auto;right:").concat(e.offsetXSmall||"inherit","}\n\n.ejhDx_bxia.ejhDx_cDib{inset-inline-end:auto;inset-inline-start:").concat(e.offsetSmall||"inherit","}\n\n[dir=ltr] .ejhDx_bxia.ejhDx_cDib{left:").concat(e.offsetSmall||"inherit",";right:auto}\n\n[dir=rtl] .ejhDx_bxia.ejhDx_cDib{left:auto;right:").concat(e.offsetSmall||"inherit","}\n\n.ejhDx_bxia.ejhDx_faeR{inset-inline-end:auto;inset-inline-start:").concat(e.offsetMedium||"inherit","}\n\n[dir=ltr] .ejhDx_bxia.ejhDx_faeR{left:").concat(e.offsetMedium||"inherit",";right:auto}\n\n[dir=rtl] .ejhDx_bxia.ejhDx_faeR{left:auto;right:").concat(e.offsetMedium||"inherit","}")},root:"ejhDx_bGBk","placement--static":"ejhDx_doBn","placement--end":"ejhDx_bQpq","placement--start":"ejhDx_bxia","offset--x-small":"ejhDx_coHh","offset--small":"ejhDx_cDib","offset--medium":"ejhDx_faeR"}
var j=(E=Object(v["a"])("8.0.0",{children:"screenReaderLabel",buttonRef:"elementRef",variant:"color"}),T=Object(_["a"])(),R=Object(b["j"])(w,D),E(O=T(O=R(O=(C=S=function(e){Object(s["a"])(n,e)
var t=Object(l["a"])(n)
function n(){Object(r["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"componentDidMount",value:function(){this.props.screenReaderLabel||this.props.children}},{key:"componentDidUpdate",value:function(){this.props.screenReaderLabel||this.props.children}},{key:"render",value:function(){var e
var t=this.props,n=t.children,r=t.screenReaderLabel,o=t.elementRef,s=t.buttonRef,l=t.size,c=t.onClick,d=t.margin,h=t.placement,f=t.offset,_=t.type,b=t.as,v=t.href,k=t.cursor,w=t.tabIndex,E=Object(a["a"])(t,["children","screenReaderLabel","elementRef","buttonRef","size","onClick","margin","placement","offset","type","as","href","cursor","tabIndex"])
return u.a.createElement("span",Object.assign({},Object(y["b"])(E),{className:p()((e={},Object(i["a"])(e,D.root,true),Object(i["a"])(e,D["placement--".concat(h)],h),Object(i["a"])(e,D["offset--".concat(f)],f),e))}),u.a.createElement(x["a"],{renderIcon:m["a"],elementRef:o||s,interaction:this.interaction,type:_,color:this.color,size:l,onClick:c,margin:d,withBorder:false,withBackground:false,as:b,href:v,cursor:k,tabIndex:w},u.a.createElement(g["a"],null,r||n)))}},{key:"interaction",get:function(){return Object(k["a"])({props:this.props})}},{key:"color",get:function(){var e=this.props,t=e.color,n=e.variant
if("icon-inverse"===n||"primary-inverse"===t)return"primary-inverse"
return"secondary"}}])
n.displayName="CloseButton"
return n}(c["Component"]),S.propTypes={screenReaderLabel:h.a.oneOfType([h.a.string,h.a.node]),color:h.a.oneOf(["primary","primary-inverse"]),interaction:h.a.oneOf(["enabled","disabled","readonly"]),elementRef:h.a.func,size:h.a.oneOf(["small","medium","large"]),onClick:h.a.func,margin:b["c"].spacing,placement:h.a.oneOf(["start","end","static"]),offset:h.a.oneOf(["none","x-small","small","medium"]),type:h.a.oneOf(["button","submit","reset"]),as:h.a.elementType,href:h.a.string,cursor:h.a.string,tabIndex:h.a.oneOfType([h.a.number,h.a.string]),children:h.a.node,buttonRef:h.a.func,variant:h.a.oneOf(["icon","icon-inverse"])},S.defaultProps={screenReaderLabel:void 0,children:void 0,onClick:function(e){},elementRef:void 0,buttonRef:void 0,variant:void 0,color:void 0,interaction:void 0,disabled:void 0,readOnly:void 0,type:"button",placement:"static",offset:"x-small",size:"small",margin:"0",as:"button",href:void 0,cursor:"pointer",tabIndex:void 0},C))||O)||O)||O)},QLaP:function(e,t,n){"use strict"
var i=function(e,t,n,i,a,r,o,s){false
if(!e){var l
if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var c=[n,i,a,r,o,s]
var u=0
l=new Error(t.replace(/%s/g,(function(){return c[u++]})))
l.name="Invariant Violation"}l.framesToPop=1
throw l}}
e.exports=i},QYKH:function(e,t,n){"use strict"
var i=n("mX+G")
var a=n.n(i)
var r=n("Y/W1")
var o=n.n(r)
var s=n("s9Pr")
var l=function(e,t){for(var n in t)c.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},c={}.hasOwnProperty
t["a"]=function(e){l(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.displayName=function(){return this.get("display_name")||this.get("name")}
t.prototype.destinationIsSameContext=function(e){var t,n,i,a,r,o,l,c
l=(t=this.get("context_asset_string"))?Object(s["a"])(t,false):[null!=(a=this.collection.parentFolder)?a.get("context_type"):void 0,null!=(r=this.collection.parentFolder)&&null!=(o=r.get("context_id"))?o.toString():void 0],i=l[0],n=l[1]
return i&&n&&i.toLowerCase()===e.get("context_type").toLowerCase()&&n===(null!=(c=e.get("context_id"))?c.toString():void 0)}
t.prototype.moveTo=function(e,t){null==t&&(t={})
return this.destinationIsSameContext(e)?this.moveToFolder(e,t):this.copyToContext(e,t)}
t.prototype.moveToFolder=function(e,t){var n
null==t&&(t={})
n=this.setAttributes({parent_folder_id:e.id},t)
$.extend(n,{parent_folder_id:e.id})
return this.save({},{attrs:n}).then((i=this,function(){i.collection.remove(i)
return i.updateCollection(i,e,t)}))
var i}
t.prototype.copyToContext=function(e,t){var n,i,a,r,s,l
null==t&&(t={})
n=this.setAttributes($.extend({},this.attributes),t)
s=this.isFile?"file":"folder"
n["source_"+s+"_id"]=n.id
delete n.id
i=new this.constructor(o.a.omit(n,"id","parent_folder_id","parent_folder_path"))
a=this.updateCollection(i,e,t)
i.url=a.url
this.set("url",a.url)
r="copy_"+s
l="/api/v1/folders/"+e.attributes.id+"/"+r
return i.save(n,{url:l})}
t.prototype.setAttributes=function(e,t){null==e&&(e={})
null==t&&(t={})
"overwrite"===t.dup?$.extend(e,{on_duplicate:"overwrite"}):"rename"===t.dup&&(t.name?$.extend(e,{display_name:t.name,name:t.name,on_duplicate:"rename"}):$.extend(e,{on_duplicate:"rename"}))
return e}
t.prototype.updateCollection=function(e,t,n){var i,a
a=this.isFile?"files":"folders"
i=t[a]
"overwrite"===n.dup&&i.remove(i.where({display_name:e.get("display_name")}))
i.add(e,{merge:true})
return i}
return t}(a.a.Model)},TiZd:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
n.d(t,"b",(function(){return a}))
let i;(function(e){e[e["ButtonsAndIcons"]=0]="ButtonsAndIcons"})(i||(i={}))
function a(e,t){switch(e){case i.ButtonsAndIcons:return r(t)
default:return false}}function r(e){var t,n
return!!(e.RICH_CONTENT_CAN_UPLOAD_FILES&&e.RICH_CONTENT_CAN_EDIT_FILES&&null!==(t=window.ENV)&&void 0!==t&&null!==(n=t.FEATURES)&&void 0!==n&&n.buttons_and_icons_root_account)}},VrN0:function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
var r=n("eodz")
const o=/^(?:select|textarea)/i
const s=/\r?\n/g
const l=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week|file)$/i
function c(){if(this.elements)return a.a.makeArray(this.elements)
{const e=a()(this).find(":input")
return e.length?e:this}}function u(){return this.name&&!this.disabled&&(this.checked||o.test(this.nodeName)||l.test(this.type))}function d(e,t){"string"===typeof t&&(t=t.replace(s,"\r\n"))
return{name:e,value:t}}function h(){const e=a()(this)
const t=(()=>{if("file"!==this.type)return e.hasClass("datetime_field_enabled")?""===e.val()?null:e.data("date")||null:e.data("rich_text")?Object(r["d"])(e,"get_code",false):e.val()
if(e.val())return this})()
return a.a.isArray(t)?t.map(e=>d(this.name,e)):d(this.name,t)}a.a.fn.serializeForm=function(){return this.map(c).filter(u).map(h).get()}},"XQb/":function(e,t,n){"use strict"
n.d(t,"a",(function(){return I}))
var i=n("Ff2n")
var a=n("1OyB")
var r=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("17x9")
var d=n.n(u)
var h=n("J2CL")
var f=n("ODXe")
var p=n("CyAq")
function m(e){if(!e||"number"===typeof e)return e
var t=Object(p["a"])(e),n=Object(f["a"])(t,2),i=n[0],a=n[1]
return"ms"===a?i:"s"===a?1e3*i:i}var g=n("oXx0")
var _=n("JX7q")
var b=n("KQm4")
var v=n("QF4Q")
var y=false
var k={toArray:function(){return[]},contains:function(){return false},add:function(){},remove:function(){}}
function x(e){var t=Object(v["a"])(e)
if(!t)return k
var n={toArray:function(){w()
return Object(b["a"])(t.classList)}};["contains","add","remove"].forEach((function(e){n[e]=function(n){w()
return t.classList[e](n)}}))
return n}function w(){if(!y){if(!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))){var e=Object.getOwnPropertyDescriptor(HTMLElement.prototype,"classList")
Object.defineProperty(SVGElement.prototype,"classList",e)}y=true}}var E=n("II2N")
var T=n("sQ3t")
var R={EXITED:-2,EXITING:-1,ENTERING:1,ENTERED:2}
var O=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){var e
Object(a["a"])(this,n)
for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o]
e=t.call.apply(t,[this].concat(r))
e._timeouts=[]
e.state={transitioning:false}
e.startTransition=function(t,n){var i=e.props,a=i.transitionEnter,r=i.transitionExit
t?e.enter(a&&n?R.EXITED:null):e.exit(r&&n?R.ENTERED:null)}
e.transition=function(t,n,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(e._unmounted)return
var r=x(Object(_["a"])(e))
var o=e.getTransitionClassName(t)
var s=e.getTransitionClassName(n)
var l=e.props.transitionClassName
n&&a&&e.transitionEnabled(t)?r.add(l):r.remove(l)
s&&r.remove(s)
o&&r.add(o)
t&&n&&e.props.onTransition(t,n)
e._timeouts.push(setTimeout((function(){if(e._unmounted)return
"function"===typeof i&&i()}),a))}
e.enter=function(t){if(e.state.transitioning||e._unmounted)return
var n=Object(_["a"])(e),i=n.props
i.onEnter()
i.transitionEnter?e.setState({transitioning:true},(function(){var n=function(){i.onEntering()
e.transition(R.ENTERED,R.ENTERING,(function(){e.setState({transitioning:false},(function(){i.onEntered()}))}))}
t?e.transition(t,null,(function(){e.transition(R.ENTERING,t,n,i.enterDelay)})):n()})):e.setState({transitioning:false},(function(){e.transition(R.ENTERED,R.EXITED)
i.onEntered()}))}
e.exit=function(t){if(e.state.transitioning)return
var n=Object(_["a"])(e),i=n.props
i.onExit()
i.transitionExit?e.setState({transitioning:true},(function(){var n=function(){i.onExiting()
e.transition(R.EXITED,R.EXITING,(function(){e.setState({transitioning:false},(function(){i.onExited()}))}))}
t?e.transition(t,null,(function(){e.transition(R.EXITING,t,n,i.exitDelay)})):n()})):e.setState({transitioning:false},(function(){e.transition(R.EXITED,R.ENTERED)
i.onExited()}))}
return e}Object(r["a"])(n,[{key:"componentDidMount",value:function(){this.startTransition(this.props.in,this.props.transitionOnMount)}},{key:"getSnapshotBeforeUpdate",value:function(e,t){if(this.props.in!==e.in&&t.transitioning)return true
return null}},{key:"componentDidUpdate",value:function(e,t,n){n&&this.clearTransition(e.transitionClassName)
this.props.transitionClassName!==e.transitionClassName&&this.clearTransition(e.transitionClassName)
e.in!==this.props.in&&this.startTransition(this.props.in,true)}},{key:"componentWillUnmount",value:function(){this._timeouts.forEach((function(e){clearTimeout(e)}))
this._unmounted=true}},{key:"clearTransition",value:function(e){var t=this
if(this._unmounted)return
this.setState({transitioning:false},(function(){if(t._unmounted)return
var n=x(t)
Object.keys(R).forEach((function(e){n.remove(t.getTransitionClassName(e))}))
n.remove(e)}))}},{key:"transitionEnabled",value:function(e){var t=this.props
switch(e){case R.EXITED:case R.EXITING:return t.transitionExit
case R.ENTERED:case R.ENTERING:return t.transitionEnter
default:return false}}},{key:"getTransitionClassName",value:function(e){var t=this.props
switch(e){case R.EXITED:return t.exitedClassName
case R.ENTERING:return t.enteringClassName
case R.ENTERED:return t.enteredClassName
case R.EXITING:return t.exitingClassName
default:return null}}},{key:"renderChildren",value:function(){return Object(E["a"])(Object(T["a"])(this.props.children),{"aria-hidden":!this.props.in||null})}},{key:"render",value:function(){return this.props.in||!this.props.unmountOnExit||this.state.transitioning?this.renderChildren():null}}])
n.displayName="BaseTransition"
return n}(c.a.Component)
O.propTypes={in:d.a.bool,unmountOnExit:d.a.bool,transitionOnMount:d.a.bool,transitionEnter:d.a.bool,transitionExit:d.a.bool,enterDelay:d.a.number,exitDelay:d.a.number,transitionClassName:d.a.string,exitedClassName:d.a.string,exitingClassName:d.a.string,enteredClassName:d.a.string,enteringClassName:d.a.string,onTransition:d.a.func,onEnter:d.a.func,onEntering:d.a.func,onEntered:d.a.func,onExit:d.a.func,onExiting:d.a.func,onExited:d.a.func,children:d.a.node,className:d.a.string}
O.defaultProps={in:false,component:"div",unmountOnExit:false,transitionOnMount:false,transitionEnter:true,transitionExit:true,enterDelay:300,exitDelay:300,onEnter:function(){},onEntering:function(){},onEntered:function(){},onExit:function(){},onExiting:function(){},onExited:function(){},onTransition:function(e,t){},className:void 0,children:null,transitionClassName:void 0,exitedClassName:void 0,exitingClassName:void 0,enteredClassName:void 0,enteringClassName:void 0}
O.states=R
var S=function(e){var t=e.transitions
return{duration:t.duration,timing:t.timing}}
var C,D,j,N,A
var B={componentId:"eJkkQ",template:function(e){return"\n\n.eJkkQ_bGBk{transform:translateZ(0)}\n\n.eJkkQ_ddDm{transition:opacity ".concat(e.duration||"inherit"," ").concat(e.timing||"inherit",",transform ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit","}\n\n.eJkkQ_cpZA,.eJkkQ_fTmM{opacity:0.01}\n\n.eJkkQ_bEpV,.eJkkQ_NoZX{opacity:1}\n\n.eJkkQ_fOgU{transition:opacity ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit",",transform ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit","}\n\n.eJkkQ_ZDum,.eJkkQ_fihg{opacity:0.01;transform:scale(0.01) translateZ(0)}\n\n.eJkkQ_eqrf,.eJkkQ_ftWB{opacity:1;transform:scale(1) translateZ(0)}\n\n.eJkkQ_dlJm,.eJkkQ_cPWt,.eJkkQ_bewW,.eJkkQ_bHhn{transition:opacity ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit",",transform ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit","}\n\n.eJkkQ_bOBe,.eJkkQ_eKZC,.eJkkQ_cusP,.eJkkQ_djUe{opacity:0.01}\n\n.eJkkQ_cusP,.eJkkQ_dWfS{transform:translate3d(100%,0,0)}\n\n.eJkkQ_eKZC,.eJkkQ_chud{transform:translate3d(-100%,0,0)}\n\n.eJkkQ_djUe,.eJkkQ_fDdb{transform:translate3d(0,-100%,0)}\n\n.eJkkQ_bOBe,.eJkkQ_cYey{transform:translate3d(0,100%,0)}\n\n.eJkkQ_diPG,.eJkkQ_fEMB,.eJkkQ_eOlt,.eJkkQ_fvoZ,.eJkkQ_bIuM,.eJkkQ_fyZW,.eJkkQ_cuyj,.eJkkQ_gaix{opacity:1;transform:translateZ(0)}")},root:"eJkkQ_bGBk",fade:"eJkkQ_ddDm","fade--exited":"eJkkQ_cpZA","fade--exiting":"eJkkQ_fTmM","fade--entered":"eJkkQ_bEpV","fade--entering":"eJkkQ_NoZX",scale:"eJkkQ_fOgU","scale--exited":"eJkkQ_ZDum","scale--exiting":"eJkkQ_fihg","scale--entered":"eJkkQ_eqrf","scale--entering":"eJkkQ_ftWB","slide-down":"eJkkQ_dlJm","slide-left":"eJkkQ_cPWt","slide-right":"eJkkQ_bewW","slide-up":"eJkkQ_bHhn","slide-down--exited":"eJkkQ_bOBe","slide-left--exited":"eJkkQ_eKZC","slide-right--exited":"eJkkQ_cusP","slide-up--exited":"eJkkQ_djUe","slide-right--exiting":"eJkkQ_dWfS","slide-left--exiting":"eJkkQ_chud","slide-up--exiting":"eJkkQ_fDdb","slide-down--exiting":"eJkkQ_cYey","slide-down--entered":"eJkkQ_diPG","slide-down--entering":"eJkkQ_fEMB","slide-left--entered":"eJkkQ_eOlt","slide-left--entering":"eJkkQ_fvoZ","slide-right--entered":"eJkkQ_bIuM","slide-right--entering":"eJkkQ_fyZW","slide-up--entered":"eJkkQ_cuyj","slide-up--entering":"eJkkQ_gaix"}
var I=(C=Object(g["a"])(),D=Object(h["j"])(S,B),C(j=D(j=(A=N=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){var e
Object(a["a"])(this,n)
for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o]
e=t.call.apply(t,[this].concat(r))
e.handleExited=function(){"function"===typeof e.props.onExited&&e.props.onExited(e.props.type)}
e.handleEntered=function(){"function"===typeof e.props.onEntered&&e.props.onEntered(e.props.type)}
return e}Object(r["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.type,n=e.children,a=Object(i["a"])(e,["type","children"])
var r=m(this.theme.duration)
var o=t?{exited:B["".concat(t,"--exited")],exiting:B["".concat(t,"--exiting")],entering:B["".concat(t,"--entered")],entered:B["".concat(t,"--entering")]}:{}
return c.a.createElement(O,Object.assign({},a,{enterDelay:r,exitDelay:r,transitionClassName:B[t],exitedClassName:o.exited,exitingClassName:o.exiting,enteredClassName:o.entering,enteringClassName:o.entered,onEntered:this.handleEntered,onExited:this.handleExited}),n)}}])
n.displayName="Transition"
return n}(l["Component"]),N.propTypes={type:d.a.oneOf(["fade","scale","slide-down","slide-up","slide-left","slide-right"]),children:d.a.element,in:d.a.bool,unmountOnExit:d.a.bool,transitionOnMount:d.a.bool,transitionEnter:d.a.bool,transitionExit:d.a.bool,onTransition:d.a.func,onEnter:d.a.func,onEntering:d.a.func,onEntered:d.a.func,onExit:d.a.func,onExiting:d.a.func,onExited:d.a.func},N.defaultProps={type:"fade",in:false,unmountOnExit:false,transitionOnMount:false,transitionEnter:true,transitionExit:true,onEnter:function(){},onEntering:function(){},onEntered:function(){},onExit:function(){},onExiting:function(){},onExited:function(){},onTransition:function(e,t){},children:null},N.states=O.states,A))||j)||j)},ZbPE:function(e,t,n){"use strict"
n.d(t,"a",(function(){return T}))
var i=n("rePB")
var a=n("1OyB")
var r=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("17x9")
var d=n.n(u)
var h=n("TSYQ")
var f=n.n(h)
var p=n("J2CL")
var m=n("KgFQ")
var g=n("jtGx")
var _=n("nAyT")
var b=n("VTBJ")
function v(e){var t=e.typography,n=e.colors,i=e.spacing
return Object(b["a"])({},t,{primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,warningColor:n.textWarning,brandColor:n.textBrand,errorColor:n.textDanger,dangerColor:n.textDanger,successColor:n.textSuccess,alertColor:n.textAlert,paragraphMargin:"".concat(i.medium," 0")})}v.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
var y,k,x,w
var E={componentId:"enRcg",template:function(e){return"\n\n.enRcg_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(e.successColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(e.errorColor||"inherit","}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(e.dangerColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")},root:"enRcg_bGBk","color-primary":"enRcg_qFsi","color-secondary":"enRcg_bLsb","color-primary-inverse":"enRcg_ezBQ","color-secondary-inverse":"enRcg_dlnd","color-success":"enRcg_cJLh","color-brand":"enRcg_fpfC","color-warning":"enRcg_eHcp","color-error":"enRcg_dwua","color-danger":"enRcg_NQMb","color-alert":"enRcg_eZgl","wrap-break-word":"enRcg_fbNi","weight-normal":"enRcg_drST","weight-light":"enRcg_pEgL","weight-bold":"enRcg_bdMA","style-normal":"enRcg_ijuF","style-italic":"enRcg_fetN","x-small":"enRcg_dfBC",small:"enRcg_doqw",medium:"enRcg_ycrn",large:"enRcg_cMDj","x-large":"enRcg_eoMd","xx-large":"enRcg_fdca","lineHeight-default":"enRcg_fEWX","lineHeight-fit":"enRcg_fNIu","lineHeight-condensed":"enRcg_dfDs","lineHeight-double":"enRcg_bDjL","letterSpacing-normal":"enRcg_eQnG","letterSpacing-condensed":"enRcg_bbUA","letterSpacing-expanded":"enRcg_bRWU","transform-none":"enRcg_wZsr","transform-capitalize":"enRcg_fCZK","transform-uppercase":"enRcg_dsRi","transform-lowercase":"enRcg_bLtD"}
var T=(y=Object(p["j"])(v,E),y(k=(w=x=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(a["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){var e
var t=this.props,a=t.wrap,r=t.weight,o=t.fontStyle,s=t.size,l=t.lineHeight,u=t.letterSpacing,d=t.transform,h=t.color,p=t.children
var _=Object(m["a"])(n,this.props)
return c.a.createElement(_,Object.assign({},Object(g["b"])(this.props),{className:f()((e={},Object(i["a"])(e,E.root,true),Object(i["a"])(e,E[s],s),Object(i["a"])(e,E["wrap-".concat(a)],a),Object(i["a"])(e,E["weight-".concat(r)],r),Object(i["a"])(e,E["style-".concat(o)],o),Object(i["a"])(e,E["transform-".concat(d)],d),Object(i["a"])(e,E["lineHeight-".concat(l)],l),Object(i["a"])(e,E["letterSpacing-".concat(u)],u),Object(i["a"])(e,E["color-".concat(h)],h),e)),ref:this.props.elementRef}),p)}}])
n.displayName="Text"
return n}(l["Component"]),x.propTypes={as:d.a.elementType,children:d.a.node,color:_["a"].deprecatePropValues(d.a.oneOf(["primary","secondary","brand","success","warning","error","danger","alert","primary-inverse","secondary-inverse"]),["error"],"It will be removed in version 8.0.0. Use `danger` instead."),elementRef:d.a.func,fontStyle:d.a.oneOf(["italic","normal"]),letterSpacing:d.a.oneOf(["normal","condensed","expanded"]),lineHeight:d.a.oneOf(["default","fit","condensed","double"]),size:d.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),transform:d.a.oneOf(["none","capitalize","uppercase","lowercase"]),weight:d.a.oneOf(["normal","light","bold"]),wrap:d.a.oneOf(["normal","break-word"])},x.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},w))||k)},aq8L:function(e,t,n){"use strict"
var i=n("HGxv")
var a=n("ouhR")
var r=n.n(a)
var o=n("gI0r")
var s=n("3PZ/")
n("dhbk")
n("ESjL")
n("65NJ")
n("w2hD")
const l=Object(i["useScope"])("instructure_misc_plugins")
r.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(o["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(o["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(r.a.raw(n))}
r.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
r.a.fn.scrollbarWidth=function(){const e=r()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const n=t.innerWidth()
e.css("overflow-y","scroll")
const i=t.innerWidth()
e.remove()
return n-i}
r.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
r.a.fn.undim=function(e){return this.animate({opacity:1},e)}
r.a.fn.confirmDelete=function(e){e=r.a.extend({},r.a.fn.confirmDelete.defaults,e)
const t=this
let n=null
let i=true
e.noMessage=e.noMessage||e.no_message
const a=function(){if(!i){e.cancelled&&r.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const i=e.prepareData?e.prepareData.call(t,n):{}
i.authenticity_token=Object(s["a"])()
r.a.ajaxJSON(e.url,"DELETE",i,n=>{e.success.call(t,n)},(n,i,a,o)=>{e.error&&r.a.isFunction(e.error)?e.error.call(t,n,i,a,o):r.a.ajaxJSON.unhandledXHRs.push(i)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!r.a.skipConfirmations){if(e.dialog){i=false
const t="object"===typeof e.dialog?e.dialog:{}
const o=e.url.includes("assignments")?"btn-danger":"btn-primary"
n=r()(e.message).dialog(r.a.extend({},{modal:true,close:a,buttons:[{text:l.t("#buttons.cancel","Cancel"),click(){r()(this).dialog("close")}},{text:l.t("#buttons.delete","Delete"),class:o,click(){i=true
r()(this).dialog("close")}}]},t))
return}i=confirm(e.message)}a()}
r.a.fn.confirmDelete.defaults={get message(){return l.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
r.a.fn.fragmentChange=function(e){if(e&&true!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let i=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(i="#"+e.substring(5))}this.bind("document_fragment_change",e)
const a=this
let o=false
for(t=0;t<r.a._checkFragments.fragmentList.length;t++){const e=r.a._checkFragments.fragmentList[t]
e.doc[0]==a[0]&&(o=true)}o||r.a._checkFragments.fragmentList.push({doc:a,fragment:""})
r()(window).bind("hashchange",r.a._checkFragments)
setTimeout(()=>{i&&i.length>0?a.triggerHandler("document_fragment_change",i):a&&a[0]&&a[0].location&&a[0].location.hash.length>0&&a.triggerHandler("document_fragment_change",a[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
r.a._checkFragments=function(){const e=r.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t]
const i=n.doc
if(i[0].location.hash!=n.fragment){i.triggerHandler("document_fragment_change",i[0].location.hash)
n.fragment=i[0].location.hash
r.a._checkFragments.fragmentList[t]=n}}}
r.a._checkFragments.fragmentList=[]
r.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
r.a.fn.showIf=function(e){if(r.a.isFunction(e))return this.each((function(t){r()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
r.a.fn.disableIf=function(e){r.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
r.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}r()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const i=this.width()
const a=this.height()
const o=(e.container||this).zIndex()
t=r()(document.createElement("div"))
t.css({width:i+6,height:a+6,top:n.top-3,left:n.left-3,zIndex:o+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){r()(this).stop().fadeOut("fast",(function(){r()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
r()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){r()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){r()(this).remove()}))
e&&e.scroll&&r()("html,body").scrollToVisible(t)}
r.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
r.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
r.a.fn.fillWindowWithMe=function(e){const t=r.a.extend({minHeight:400},e),n=r()(this),i=r()("#wrapper"),a=r()("#main"),o=r()("#not_right_side"),s=r()(window),l=r()(this).add(t.alsoResize)
function c(){l.height(0)
const e=s.height()-(i.offset().top+i.outerHeight())+(a.height()-o.height()),c=Math.max(400,e)
l.height(c)
r.a.isFunction(t.onResize)&&t.onResize.call(n,c)}c()
s.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",c)
return this}
r.a.fn.autoGrowInput=function(e){e=r.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||r()(this).width(),n="",i=r()(this),a=r()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),letterSpacing:i.css("letterSpacing"),whiteSpace:"nowrap"}),o=function(){setTimeout(()=>{if(n===(n=i.val()))return
a.text(n)
const r=a.width(),o=r+e.comfortZone>=t?r+e.comfortZone:t,s=i.width(),l=o<s&&o>=t||o>t&&o<e.maxWidth
l&&i.width(o)})}
a.insertAfter(i)
r()(this).bind("keyup keydown blur update change",o)}))
return this}
r.a},dDTa:function(e,t,n){"use strict"
const i=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=i},dbrX:function(e,t,n){"use strict"
var i=n("uYtQ")
var a=n("QLaP")
var r=n.n(a)
const o={}
const s={getCssVariant(){const e=window.ENV.use_high_contrast?"high_contrast":"normal_contrast"
const t=Object(i["c"])()?"_rtl":""
return`new_styles_${e}${t}`},getHandlebarsIndex:()=>window.BRANDABLE_CSS_HANDLEBARS_INDEX||[[],{}],urlFor(e,{combinedChecksum:t,includesNoVariables:n}){const i=n?"no_variables":s.getCssVariant()
return[window.ENV.ASSET_HOST||"","dist","brandable_css",i,`${e}-${t}.css`].join("/")},loadStylesheet(e,t){if(e in o)return
const n=document.createElement("link")
n.rel="stylesheet"
n.href=s.urlFor(e,t)
n.setAttribute("data-loaded-by-brandableCss",true)
document.head.appendChild(n)},loadStylesheetForJST({bundle:e,id:t}){const[n,i]=s.getHandlebarsIndex()
r()(i.hasOwnProperty(t),`requested to load stylesheet for template "${e}" (${t}) but no mapping is available for it!`)
if(1===i[t].length)return s.loadStylesheet(e,{combinedChecksum:i[t][0],includesNoVariables:true})
{let a=i[t][n.indexOf(s.getCssVariant())]
"number"===typeof a&&(a=i[t][a])
return s.loadStylesheet(e,{combinedChecksum:a,includesNoVariables:false})}}}
t["a"]=s},eVns:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var i=n("BrAc")
function a(e){let t=e
let n=null
return e=>{null===n&&(n=i["a"].post("/api/v1/jwts/refresh",{jwt:t}).then(e=>{n=null
t=e.data.token
return t}))
"function"===typeof e&&n.then(e)
return n}}var r=n("s9Pr")
function o(){var e
if(!ENV.context_asset_string)return null
let[t,n]=Object(r["a"])(ENV.context_asset_string,false)
const i=ENV.current_user_id
const o={contextType:t,contextId:n,userId:i}
const s=ENV.RICH_CONTENT_CAN_UPLOAD_FILES
if(!s||"account"===t){n=i
t="user"}return{canUploadFiles:ENV.RICH_CONTENT_CAN_UPLOAD_FILES,containingContext:o,contextType:t,contextId:n,filesTabDisabled:ENV.RICH_CONTENT_FILES_TAB_DISABLED,host:ENV.RICH_CONTENT_APP_HOST,jwt:ENV.JWT,refreshToken:a(ENV.JWT),themeUrl:ENV.active_brand_config_json_url,canvasUrl:ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN,features:{buttons_and_icons_cropper:null===(e=ENV.FEATURES)||void 0===e?void 0:e.buttons_and_icons_cropper}}}},gBVS:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var i=n("BrAc")
function a(e){return new Promise(t=>{setTimeout(t,e)})}function r(e,t={}){const n=t.ajaxLib||i["a"]
const{url:o,workflow_state:s,results:l,message:c}=e
if("queued"===s||"running"===s){let{interval:e}=t
e||(e=1e3)
e<100&&(e=100)
return a(e).then(()=>n.get(o)).then(e=>{const n=e.data
return r(n,t)})}return"completed"===s?Promise.resolve(l):Promise.reject(c)}},hLjT:function(e,t){e.exports=e=>e.id.replace(/^question_/,"")},hPGw:function(e,t,n){"use strict"
n.d(t,"a",(function(){return R}))
var i=n("VTBJ")
var a=n("rePB")
var r=n("Ff2n")
var o=n("1OyB")
var s=n("vuIU")
var l=n("Ji7U")
var c=n("LK+K")
var u=n("q1tI")
var d=n.n(u)
var h=n("17x9")
var f=n.n(h)
var p=n("TSYQ")
var m=n.n(p)
var g=n("J2CL")
var _=n("oXx0")
var b=n("wnpw")
function v(){return{sizeXSmall:"1.125rem",sizeSmall:"2rem",sizeMedium:"3rem",sizeLarge:"5rem",sizeXLarge:"10rem"}}var y,k,x,w,E
var T={componentId:"cGqzL",template:function(e){return"\n\n.cGqzL_bGBk{height:1em;line-height:1;vertical-align:middle;width:1em}\n\n.cGqzL_cwgF{transform:rotate(90deg)}\n\n.cGqzL_exaY{transform:rotate(180deg)}\n\n.cGqzL_dTDN{transform:rotate(270deg)}\n\n[dir=rtl] .cGqzL_owrh{transform:scaleX(-1)}\n\n[dir=rtl] .cGqzL_owrh.cGqzL_cwgF{transform:scaleX(-1) rotate(90deg)}\n\n[dir=rtl] .cGqzL_owrh .cGqzL_exaY{transform:scaleX(-1) rotate(180deg)}\n\n[dir=rtl] .cGqzL_owrh .cGqzL_dTDN{transform:scaleX(-1) rotate(270deg)}\n\n.cGqzL_dIzR{font-size:".concat(e.sizeXSmall||"inherit","}\n\n.cGqzL_VCXp{font-size:").concat(e.sizeSmall||"inherit","}\n\n.cGqzL_fKcQ{font-size:").concat(e.sizeMedium||"inherit","}\n\n.cGqzL_cnhd{font-size:").concat(e.sizeLarge||"inherit","}\n\n.cGqzL_fWMB{font-size:").concat(e.sizeXLarge||"inherit","}")},root:"cGqzL_bGBk","rotate--90":"cGqzL_cwgF","rotate--180":"cGqzL_exaY","rotate--270":"cGqzL_dTDN",bidirectional:"cGqzL_owrh","size--x-small":"cGqzL_dIzR","size--small":"cGqzL_VCXp","size--medium":"cGqzL_fKcQ","size--large":"cGqzL_cnhd","size--x-large":"cGqzL_fWMB"}
var R=(y=Object(_["a"])(),k=Object(g["j"])(v,T),y(x=k(x=(E=w=function(e){Object(l["a"])(n,e)
var t=Object(c["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(s["a"])(n,[{key:"render",value:function(){var e
var t=this.props,n=t.rotate,i=t.className,o=t.size,s=t.bidirectional,l=Object(r["a"])(t,["rotate","className","size","bidirectional"])
return d.a.createElement(b["a"],Object.assign({},l,{rotate:n,className:m()((e={},Object(a["a"])(e,T.root,true),Object(a["a"])(e,T["rotate--".concat(n)],n&&"0"!==n),Object(a["a"])(e,T["size--".concat(o)],o),Object(a["a"])(e,T.bidirectional,s),Object(a["a"])(e,i,i),e))}))}}])
n.displayName="SVGIcon"
return n}(u["Component"]),w.propTypes=Object(i["a"])({},b["a"].propTypes,{rotate:f.a.oneOf(["0","90","180","270"]),size:f.a.oneOf(["x-small","small","medium","large","x-large"]),bidirectional:f.a.bool}),w.defaultProps={rotate:"0",bidirectional:false,size:void 0},E))||x)||x)},hpsT:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
function i(e,t){for(let n=0;n<e.length;n++){const i=e[n]
if(i===t){e.splice(n,1)
break}}return e}},"ko/W":function(e,t,n){"use strict"
var i={EVT_PAGE_FOCUSED:"page_focused",EVT_PAGE_BLURRED:"page_blurred",EVT_QUESTION_VIEWED:"question_viewed",EVT_QUESTION_FLAGGED:"question_flagged",EVT_SESSION_STARTED:"session_started",EVT_PRIORITY_LOW:0,EVT_PRIORITY_HIGH:100,EVT_STATE_PENDING_DELIVERY:"pending_delivery",EVT_STATE_IN_DELIVERY:"in_delivery",EVT_STATE_DELIVERED:"delivered",EVT_STORAGE_KEY:"qla_events",EVT_STORAGE_MEMORY:"memory",EVT_STORAGE_LOCAL_STORAGE:"localStorage"}
var a=n("Y/W1")
function r(){let e=Date.now()
return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const n=(e+16*Math.random())%16|0
e=Math.floor(e/16)
const i="x"===t?n:7&n|8
return i.toString(16)})}class o{static fromJSON(e){const t=new o(e.event_type,e.event_data)
t.recordedAt=new Date(e.client_timestamp)
return t}constructor(e,t){if(!e)throw new Error("An event type must be specified.")
this._id=r()
this._state=i.EVT_STATE_PENDING_DELIVERY
this.type=e
this.data=Object(a["clone"])(t)
this.recordedAt=new Date}isPendingDelivery(){return this._state===i.EVT_STATE_PENDING_DELIVERY}isBeingDelivered(){return this._state===i.EVT_STATE_IN_DELIVERY}wasDelivered(){return this._state===i.EVT_STATE_DELIVERED}toJSON(){return{event_type:this.type,event_data:this.data,client_timestamp:this.recordedAt}}toString(){return JSON.stringify(this.toJSON())}}class s{constructor(e){this._events=e}isEmpty(){return 0===this._events.length}markPendingDelivery(){return this._events.forEach(e=>e._state=i.EVT_STATE_PENDING_DELIVERY)}markBeingDelivered(){return this._events.forEach(e=>e._state=i.EVT_STATE_IN_DELIVERY)}toJSON(){return this._events.map(e=>e.toJSON())}}var l=n("L0Ie")
var c=n.n(l)
const u=[i.EVT_STORAGE_MEMORY,i.EVT_STORAGE_LOCAL_STORAGE]
class d{static setStorageAdapter(e){if(-1===u.indexOf(e))throw new Error(`Unsupported storage adapter "${e}". Available adapters are:\n${u.join(", ")}`)
return d.STORAGE_ADAPTER=e}constructor(){this.useLocalStorage=d.STORAGE_ADAPTER===i.EVT_STORAGE_LOCAL_STORAGE
this._events=this._load()||[]
c.a.debug("EventBuffer: using",this.constructor.STORAGE_ADAPTER,"for storage")}push(e){this._events.push(e)
return this._save()}isEmpty(){return 0===this._events.length}getLength(){return this._events.length}filter(e){return new s(this._events.filter(e))}discard(e){const t=e._events.map(e=>e._id)
this._events=this._events.filter(e=>-1===t.indexOf(e._id))
this._save()
return}toJSON(){return this._events.map(e=>e.toJSON())}_save(){if(this.useLocalStorage)try{localStorage.setItem(i.EVT_STORAGE_KEY,JSON.stringify(this.toJSON()))}catch(e){c.a.warn("Unable to save to localStorage, likely because we're out of space.")}return}_load(){if(this.useLocalStorage){const e=JSON.parse(localStorage.getItem(i.EVT_STORAGE_KEY)||"[]")
return e.map(e=>o.fromJSON(e))}return}}d.STORAGE_ADAPTER=i.EVT_STORAGE_MEMORY
var h=n("ouhR")
var f=n.n(h)
var p=n("hpsT")
const m={Accept:"application/json; charset=UTF-8","Content-Type":"application/json; charset=UTF-8"}
class g{constructor(e={}){this.options=Object(a["extend"])({},g.options,e)
this._trackerFactories=[]
this._state={trackers:[],buffer:null,deliveryAgent:null,deliveries:[],lastEventType:null}}registerTracker(e){return this._trackerFactories.push(e)}unregisterAllTrackers(){return this._trackerFactories=[]}start(){const e=this._state
e.buffer=new d
const{options:t}=this
const n=this._enqueue.bind(this)
function i(e,t){const i=new o(e.getEventType(),t)
return n(i,e.getDeliveryPriority())}e.trackers=this._trackerFactories.map(e=>{const t=new e
t.install(i.bind(null,t))
return t})
if(t.autoDeliver)return this._startDeliveryAgent()}isRunning(){return!!this._state.buffer}isDirty(){return this.isRunning()&&!this._state.buffer.isEmpty()}isDelivering(){return this._state.deliveries.length>0}deliver(){const{buffer:e}=this._state
const{deliveries:t}=this._state
const{options:n}=this
const i=e.filter(e=>e.isPendingDelivery())
if(i.isEmpty())return Object(h["when"])()
i.markBeingDelivered()
const a=Object(h["ajax"])({url:n.deliveryUrl,type:"POST",global:false,headers:m,data:JSON.stringify({quiz_submission_events:i.toJSON()}),error:n.errorHandler})
a.then(()=>e.discard(i),()=>i.markPendingDelivery())
const r=()=>Object(p["a"])(t,a)
a.then(r,r)
t.push(a)
return a}stop(e=false){const t=this._state
if(this.isDelivering()&&!e){console.warn("You are attempting to stop the QuizLogAuditing module while a delivery is in progress.")
return Object(h["when"])(t.deliveries).done(this.stop.bind(this,true))}t.buffer=null
t.deliveryAgent&&this._stopDeliveryAgent()
t.trackers.forEach(e=>e.uninstall())
t.trackers=[]
return Object(h["when"])()}_startDeliveryAgent(){return this._state.deliveryAgent=setInterval(this.deliver.bind(this),this.options.autoDeliveryFrequency)}_enqueue(e,t){if(e.type===i.EVT_PAGE_FOCUSED&&this._state.lastEventType!==i.EVT_PAGE_BLURRED)return false
this._state.buffer.push(e)
this._state.lastEventType=e.type
c.a.log(`Enqueuing ${e} for delivery.`)
if(t===i.EVT_PRIORITY_HIGH)return this.isDelivering()?Object(h["when"])(this._state.deliveries).done(this.deliver.bind(this)):this.deliver()}_stopDeliveryAgent(){return this._state.deliveryAgent=clearInterval(this._state.deliveryAgent)}}g.options={autoDeliver:true,autoDeliveryFrequency:15e3,deliveryUrl:"/quiz_submission_events"}
class _{constructor(e={}){this.eventType||(this.eventType=null)
this.priority||(this.priority=i.EVT_PRIORITY_LOW)
this._options=Object(a["extend"])({},this.options,e)
this.uid=`${this.eventType}_${Object(a["uniqueId"])()}`}install(e){throw new Error("Not implemented!")}getEventType(){return this.eventType}getDeliveryPriority(){return this.priority}getOption(e){return this._options[e]}uninstall(){if(this._bindings){this._bindings.forEach(e=>f()(e.selector).off(e.eventName))
return this._bindings=null}}bind(e,t,n,i={}){this._bindings||(this._bindings=[])
this._bindings.push({selector:e,eventName:t})
const r=parseInt(i.throttle||0,10)
r>0&&(n=Object(a["throttle"])(n,r,{leading:true,trailing:false}))
f()(e).on(`${t}.${this.eventType}`,n)}}class b extends _{install(e){return this.bind(window,"focus",()=>e(),{throttle:this.getOption("frequency")})}}b.prototype.eventType=i.EVT_PAGE_FOCUSED
b.prototype.options={frequency:5e3}
class v extends _{install(e){return this.bind(window,"blur",()=>{setTimeout(()=>{"IFRAME"!==document.activeElement.tagName&&e()})},{throttle:this.getOption("frequency")})}}v.prototype.eventType=i.EVT_PAGE_BLURRED
v.prototype.options={frequency:5e3}
const y=f()(window)
function k(e){const t=f()(e)
const n=y.scrollTop()
const i=n+y.height()
const a=t.offset().top
const r=a+t.height()
return n<a&&i>r}f.a.extend(f.a.expr[":"],{in_viewport:k})
var x=n("hLjT")
var w=n.n(x)
class E extends _{install(e,t=window){let n=[]
return this.bind(t,"scroll",()=>{const t=this.identifyVisibleQuestions().filter(e=>-1===n.indexOf(e))
if(t.length>0){n=n.concat(t)
c.a.log(`Student has just viewed the following questions: ${t}. (Questions viewed up until now are: ${n})`)
return e(t)}},{throttle:this.getOption("frequency")})}identifyVisibleQuestions(){return f()(".question[id]:visible").filter(":in_viewport").toArray().map(w.a)}}E.prototype.eventType=i.EVT_QUESTION_VIEWED
E.prototype.options={frequency:2500}
class T extends _{install(e){f()(document.body).on("click."+this.uid,this.getOption("buttonSelector"),t=>{const n=f()(t.target).closest(this.getOption("questionSelector"))
const i=n.hasClass(this.getOption("questionMarkedClass"))
const a=w()(n[0])
c.a.log(`Question ${a} ${i?"is now flagged":"is no longer flagged"}.`)
return e({flagged:i,questionId:a})})}}T.prototype.eventType=i.EVT_QUESTION_FLAGGED
T.prototype.options={buttonSelector:".flag_question",questionSelector:".question",questionMarkedClass:"marked"}
class R extends _{install(e){const{userAgent:t}=navigator
c.a.log(`I've been loaded by ${t}.`)
if(-1===location.href.indexOf("question")&&location.href.indexOf("take")>0)return e({user_agent:t})}}R.prototype.eventType=i.EVT_SESSION_STARTED
R.prototype.options={}
const O=[b,v,E,T,R]
const S=new g
O.forEach(e=>S.registerTracker(e))
c.a.debug("QuizLogAuditing: will be using localStorage.")
d.setStorageAdapter(i.EVT_STORAGE_LOCAL_STORAGE)
S.options.deliveryUrl=ENV.QUIZ_SUBMISSION_EVENTS_URL
S.options.errorHandler=function(e){console.log(e)
401!==e.status&&"Unauthorized"!==e.statusText||window.location.reload()}
t["a"]=S},msTH:function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
var r=n("Y/W1")
var o=n.n(r)
var s=n("gI0r")
var l=n("HGxv")
const c=Object(l["useScope"])("user_content")
const u={translateMathmlForScreenreaders(e){var t,n
if(!(null!==(t=ENV)&&void 0!==t&&null!==(n=t.FEATURES)&&void 0!==n&&n.new_math_equation_handling)){const t=a()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const n=a()('<span class="hidden-readable"></span>')
n.html(t)
return n}},toMediaCommentLink(e){const t=a()(`<a\n        id='media_comment_${Object(s["a"])(a()(e).data("media_comment_id"))}'\n        data-media_comment_type='${Object(s["a"])(a()(e).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(s["a"])(e.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(s["a"])(a()(e).attr("data-alt"))}'\n      />`)
t.html(a()(e).html())
return t},convert(e,t={}){const n=a()("<div />").html(e)
n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return u.toMediaCommentLink(this)}))
n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=a()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=o.a.uniqueId("uc_")
let n="/object_snippet"
ENV.files_domain&&(n=`//${ENV.files_domain}${n}`)
const i=a()(`<form\n            action='${Object(s["a"])(n)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(s["a"])(t)}'\n            id='form-${Object(s["a"])(t)}'\n          />`)
i.append(a()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
i.append(a()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
a()("body").append(i)
setTimeout(()=>i.submit(),0)
return a()(`<iframe\n            class='user_content_iframe'\n            name='${Object(s["a"])(t)}'\n            style='width: ${Object(s["a"])(e.data("uc_width"))}; height: ${Object(s["a"])(e.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(s["a"])(c.t("User Content"))}'\n          />`)}))
n.find("img.equation_image").each((e,t)=>{const n=a()(t)
const i=u.translateMathmlForScreenreaders(n)
n.removeAttr("x-canvaslms-safe-mathml")
n.after(i)})}return n.html()}}
t["a"]=u},qJBq:function(e,t){(function(){var t,n,i
i=[]
t={}
e.exports=n=function(e,n,a){var r,o,s,l,c,u,d,h,f
null==a&&(a=true)
if("string"===typeof n){if(2!==n.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"}
f=n[0],r=n[1]}else if(Array.isArray(n)){if(2!==n.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"}
f=n[0],r=n[1]}else{f=(null!=n?n.thousands:void 0)||(null!=n?n.group:void 0)||t.thousands
r=(null!=n?n.decimal:void 0)||t.decimal}d=""+f+r+a
u=i[d]
if(null==u){s=a?3:1
u=i[d]=new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+f+"\\d{"+s+",3})+)|\\d*))(?:\\"+r+"(\\d*))?\\s*$")}h=e.match(u)
if(!(null!=h&&3===h.length))return NaN
l=h[1].replace(new RegExp("\\"+f,"g"),"")
o=h[2]
c=parseFloat(l+"."+o)
return c}
e.exports.setOptions=function(e){var n,i
for(n in e){i=e[n]
t[n]=i}}
e.exports.factoryReset=function(){t={thousands:",",decimal:"."}}
e.exports.withOptions=function(e,t){null==t&&(t=true)
return function(i){return n(i,e,t)}}
e.exports.factoryReset()}).call(this)},stQK:function(e,t,n){"use strict"
var i=n("HGxv")
const a=Object(i["useScope"])("closedCaptionLanguages")
const r={get af(){return a.t("Afrikaans")},get sq(){return a.t("Albanian")},get ar(){return a.t("Arabic")},get be(){return a.t("Belarusian")},get bg(){return a.t("Bulgarian")},get ca(){return a.t("Catalan")},get zh(){return a.t("Chinese")},get hr(){return a.t("Croatian")},get cs(){return a.t("Czech")},get da(){return a.t("Danish")},get nl(){return a.t("Dutch")},get en(){return a.t("English")},get et(){return a.t("Estonian")},get fl(){return a.t("Filipino")},get fi(){return a.t("Finnish")},get fr(){return a.t("French")},get gl(){return a.t("Galician")},get de(){return a.t("German")},get el(){return a.t("Greek")},get ht(){return a.t("Haitian Creole")},get hi(){return a.t("Hindi")},get hu(){return a.t("Hungarian")},get is(){return a.t("Icelandic")},get id(){return a.t("Indonesian")},get ga(){return a.t("Irish")},get it(){return a.t("Italian")},get ja(){return a.t("Japanese")},get ko(){return a.t("Korean")},get lv(){return a.t("Latvian")},get lt(){return a.t("Lithuanian")},get mk(){return a.t("Macedonian")},get ms(){return a.t("Malay")},get mt(){return a.t("Maltese")},get no(){return a.t("Norwegian")},get fa(){return a.t("Persian")},get pl(){return a.t("Polish")},get pt(){return a.t("Portuguese")},get ro(){return a.t("Romanian")},get ru(){return a.t("Russian")},get sr(){return a.t("Serbian")},get sk(){return a.t("Slovak")},get sl(){return a.t("Slovenian")},get es(){return a.t("Spanish")},get sw(){return a.t("Swahili")},get sv(){return a.t("Swedish")},get tl(){return a.t("Tagalog")},get th(){return a.t("Thai")},get tr(){return a.t("Turkish")},get uk(){return a.t("Ukrainian")},get vi(){return a.t("Vietnamese")},get cy(){return a.t("Welsh")},get yi(){return a.t("Yiddish")},get"en-CA"(){return a.t("English (Canada)")},get"en-AU"(){return a.t("English (Australia)")},get"en-GB"(){return a.t("English (United Kingdom)")},get"fr-CA"(){return a.t("French (Canada)")},get he(){return a.t("Hebrew")},get hy(){return a.t("Armenian")},get mi(){return a.t("Māori (New Zealand)")},get nb(){return a.t("Norwegian Bokmål")},get nn(){return a.t("Norwegian Nynorsk")},get"zh-Hans"(){return a.t("Chinese Simplified")},get"zh-Hant"(){return a.t("Chinese Traditional")}}
t["a"]=r},tHpF:function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
n("VrN0")
const r={validate:/^[a-zA-Z][a-zA-Z0-9_-]*(?:\[(?:\d*|[a-zA-Z0-9_-]+)\])*$/,key:/[a-zA-Z0-9_-]+|(?=\[\])/g,push:/^$/,fixed:/^\d+$/,named:/^[a-zA-Z0-9_-]+$/}
const o=function(e,t,n){e[t]=n
return e}
a.a.fn.toJSON=function(){let e={},t={}
const n=function(e,n){void 0===t[e]&&(t[e]=0)
if(void 0===n)return t[e]++
if(void 0!==n&&n>t[e])return t[e]=++n}
a.a.each(a()(this).serializeForm(),(function(){if(!r.validate.test(this.name))return
let t,i=this.name.match(r.key),s=this.value,l=this.name
while(void 0!==(t=i.pop())){l=l.replace(new RegExp("\\["+t+"\\]$"),"")
if(t.match(r.push))s=o([],n(l),s)
else if(t.match(r.fixed)){n(l,t)
s=o([],t,s)}else t.match(r.named)&&(s=o({},t,s))}e=a.a.extend(true,e,s)}))
return e}},w4it:function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
a()(".question select").bind("mousewheel",e=>e.preventDefault())},wnpw:function(e,t,n){"use strict"
n.d(t,"a",(function(){return O}))
var i=n("rePB")
var a=n("VTBJ")
var r=n("Ff2n")
var o=n("1OyB")
var s=n("vuIU")
var l=n("Ji7U")
var c=n("LK+K")
var u=n("q1tI")
var d=n.n(u)
var h=n("17x9")
var f=n.n(h)
var p=n("TSYQ")
var m=n.n(p)
var g=n("J2CL")
var _=n("BTe1")
var b=n("jtGx")
var v=n("oXx0")
function y(e){var t=e.colors
return{primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,warningColor:t.textWarning,brandColor:t.textBrand,errorColor:t.textDanger,alertColor:t.textAlert,successColor:t.textSuccess}}y.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
var k,x,w,E,T
var R={componentId:"dUOHu",template:function(e){return"\n\n.dUOHu_bGBk{fill:currentColor;overflow:visible}\n\n.dUOHu_eXrk{display:inline-block}\n\n.dUOHu_cRbP{display:block}\n\n.dUOHu_drOs{color:inherit}\n\n.dUOHu_eCSh{color:".concat(e.primaryColor||"inherit","}\n\n.dUOHu_buuG{color:").concat(e.secondaryColor||"inherit","}\n\n.dUOHu_bFtJ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.dUOHu_dsSB{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.dUOHu_eZal{color:").concat(e.successColor||"inherit","}\n\n.dUOHu_cVUo{color:").concat(e.brandColor||"inherit","}\n\n.dUOHu_eScd{color:").concat(e.warningColor||"inherit","}\n\n.dUOHu_cpQl{color:").concat(e.errorColor||"inherit","}\n\n.dUOHu_cUGG{color:").concat(e.alertColor||"inherit","}")},root:"dUOHu_bGBk",inline:"dUOHu_eXrk",block:"dUOHu_cRbP","color--inherit":"dUOHu_drOs","color--primary":"dUOHu_eCSh","color--secondary":"dUOHu_buuG","color--primary-inverse":"dUOHu_bFtJ","color--secondary-inverse":"dUOHu_dsSB","color--success":"dUOHu_eZal","color--brand":"dUOHu_cVUo","color--warning":"dUOHu_eScd","color--error":"dUOHu_cpQl","color--alert":"dUOHu_cUGG"}
var O=(k=Object(v["a"])(),x=Object(g["j"])(y,R),k(w=x(w=(T=E=function(e){Object(l["a"])(n,e)
var t=Object(c["a"])(n)
function n(){var e
Object(o["a"])(this,n)
e=t.call(this)
e.titleId=Object(_["a"])("InlineSVG-title")
e.descId=Object(_["a"])("InlineSVG-desc")
return e}Object(s["a"])(n,[{key:"renderTitle",value:function(){var e=this.props.title
return e?d.a.createElement("title",{id:this.titleId},e):null}},{key:"renderDesc",value:function(e){return e?d.a.createElement("desc",{id:this.descId},e):null}},{key:"renderContent",value:function(){if(this.props.src){var e=n.prepareSrc(this.props.src)
return d.a.createElement("g",{role:"presentation",dangerouslySetInnerHTML:{__html:e}})}return d.a.createElement("g",{role:"presentation"},this.props.children)}},{key:"render",value:function(){var e
var t=this.props,o=t.style,s=t.title,l=t.description,c=t.focusable,u=(t.children,t.src,t.color),h=Object(r["a"])(t,["style","title","description","focusable","children","src","color"])
var f="auto"===this.props.width?null:this.props.width
var p="auto"===this.props.height?null:this.props.height
return d.a.createElement("svg",Object.assign({},S(this.props.src),Object(b["a"])(this.props,n.propTypes,["inline"]),{style:Object(a["a"])({},o,{width:f,height:p}),width:f,height:p,"aria-hidden":s?null:"true","aria-labelledby":this.labelledBy,role:this.role,focusable:c?"true":"false",className:m()((e={},Object(i["a"])(e,R.root,true),Object(i["a"])(e,R["color--".concat(u)],"auto"!==u),Object(i["a"])(e,R.inline,this.props.inline),Object(i["a"])(e,R.block,!this.props.inline),Object(i["a"])(e,h.className,h.className),e))}),this.renderTitle(),this.renderDesc(l),this.renderContent())}},{key:"role",get:function(){return this.props.title?"img":"presentation"}},{key:"labelledBy",get:function(){var e=[]
this.props.title&&e.push(this.titleId)
this.props.description&&e.push(this.descId)
return e.length>0?e.join(" "):null}}])
n.displayName="InlineSVG"
return n}(u["Component"]),E.propTypes={children:f.a.node,src:f.a.string,title:f.a.string,description:f.a.string,focusable:f.a.bool,width:f.a.oneOfType([f.a.string,f.a.number]),height:f.a.oneOfType([f.a.string,f.a.number]),inline:f.a.bool,color:f.a.oneOf(["inherit","primary","secondary","primary-inverse","secondary-inverse","success","error","alert","warning","brand","auto"])},E.defaultProps={focusable:false,src:"",title:"",description:"",inline:true,children:null,width:"1em",height:"1em",color:"inherit"},E.prepareSrc=function(e){var t=/<svg[^>]*>((.|[\n\r])*)<\/svg>/
var n=t.exec(e)
return n?n[1]:e},T))||w)||w)
function S(e){var t={}
var n=/<svg\s+([^>]*)\s*>/
var i=/(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g
if("string"===typeof e){var a=n.exec(e)
var r=a?a[1]:""
var o=["xmlns","xmlns:xlink","version"]
var s=i.exec(r)
while(null!=s){-1===o.indexOf(s[1])&&(t[s[1]]=s[2]||(s[3]?s[3]:s[4]?s[4]:s[5])||s[1])
s=i.exec(r)}}return t}}}])

//# sourceMappingURL=take_quiz-c-97011647b7.js.map