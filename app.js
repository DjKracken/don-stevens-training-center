const API="https://ds-training-ai.m-adams-2006.workers.dev/scenario";
const reviewed="September 30, 2026";

const lines={
manitowoc:{
 name:"Manitowoc Ice",
 desc:"Ice production, storage, dispensing, condenser selection and application sizing.",
 refs:[
  ["Indigo NXT current manual","https://www.manitowocice.com/asset/?id=bepmjn&prefLang=en-US"],
  ["CNF0201 / CNF0202 literature","https://www.manitowocice.com/asset/?id=irurh&prefLang=en-US"]
 ],
 modules:[
  {title:"Ice fundamentals",summary:"Start with the load, not the model number.",points:[
   ["Production and storage","Daily production is the factory; storage is the warehouse. A larger bin increases reserve but does not increase the head's ice-making rate."],
   ["Peak versus daily demand","A machine can cover total daily pounds and still fail operationally if reserve is exhausted during a concentrated rush."],
   ["Site conditions","Published production changes with ambient air and incoming-water temperature. Size from the appropriate published condition, not the best-case headline number."],
   ["Application first","Document what consumes ice: beverages, bar wells, pitchers, kitchen prep, displays, transport coolers, hotel buckets or other uses."]
  ]},
  {title:"Indigo NXT & model numbers",summary:"Decode the model before you quote it.",points:[
   ["Platform","Indigo NXT is Manitowoc's modular cuber platform. A modular head normally requires a compatible bin or dispenser."],
   ["Cube code","Current Indigo NXT documentation identifies D as Dice and Y as Half-Dice; R is Regular on applicable models."],
   ["Condenser code","Current documentation identifies A as air-cooled, W as water-cooled, N as remote air-cooled and C as CVD air-cooled."],
   ["Voltage code","Examples in current documentation include 161 = 115/60/1 and 261 = 208–230/60/1. Always verify the exact model before order placement."],
   ["Production class","The numeric production designation is a nominal class, not a promise of actual pounds per day at every site condition."]
  ]},
  {title:"Condenser selection",summary:"Where the heat goes matters.",points:[
   ["Air-cooled","Rejects condenser heat into the surrounding space. Verify ambient limits, ventilation and required clearances."],
   ["Water-cooled","Transfers condenser heat to water. It can help a hot or poorly ventilated equipment room, but adds condenser-water use and plumbing requirements."],
   ["Remote","Moves condenser heat/noise away from the ice-machine location. Verify the complete remote package, line-set requirements and installation constraints."],
   ["Sales question","Do not choose condenser type from habit. Ask what the room is like during the worst operating period."]
  ]},
  {title:"Bins, dispensers & nugget",summary:"Match the storage and user interface to the operation.",points:[
   ["Bin sizing","Evaluate usable storage, peak drawdown, recovery time, physical fit and head/bin compatibility."],
   ["CNF0201 / CNF0202","Current literature lists both at 315 lb/day at 70°F air/50°F water and 222 lb/day at 90°F/70°F."],
   ["CNF storage","Current literature lists 10 lb storage for CNF0201 and 20 lb for CNF0202."],
   ["CNF controls","Three dispense settings are standard: ice only, water only, or ice and water. Activation-arm and touchless options are identified in current literature."],
   ["Self-service","A scoop-bin and a dispenser solve different operational problems. Confirm who is obtaining ice and how."]
  ]},
  {title:"Installation & utilities",summary:"The right machine is not the right machine if it does not fit.",points:[
   ["Electrical","Verify voltage, phase, ampacity/overcurrent requirements and receptacle or hard-wire needs from the exact current specification."],
   ["Water and drain","Confirm potable-water connection, drain routing and any additional condenser-water requirements."],
   ["Fit","Check equipment dimensions, manufacturer clearances, ceiling/upper obstructions and service access."],
   ["Delivery path","Measure doors, turns, elevators, stairs and other restrictions between unloading and final position."],
   ["Filtration","Treat appropriate water treatment as part of the system discussion; verify site water and current manufacturer requirements."]
  ]},
  {title:"Discovery workflow",summary:"A repeatable sequence prevents expensive misses.",points:[
   ["1 — Application","What is the ice used for and what ice type is required?"],
   ["2 — Existing system","What is installed, how does it perform, and is its condition distorting the demand picture?"],
   ["3 — Demand","What happens on the busiest day and busiest hour? Is bagged ice being purchased?"],
   ["4 — Environment","Ambient temperature, incoming water, ventilation and equipment-room conditions."],
   ["5 — Infrastructure","Electrical, water, drains and condenser feasibility."],
   ["6 — Physical fit","Final space, clearances and delivery path."],
   ["7 — Verify","Use current manufacturer literature for performance, compatibility and installation requirements before quotation."]
  ]}
 ],
 quiz:[
  ["Why can a larger bin not correct inadequate daily production?","Because storage increases reserve; it does not increase the ice-making rate."],
  ["Why can the nominal production class mislead a salesperson?","It is a class designation. Actual published production depends on the exact model and test/site conditions."],
  ["What is the practical difference between air- and water-cooled condensers?","Air-cooled rejects condenser heat into the room; water-cooled transfers condenser heat to water and adds water/plumbing considerations."],
  ["What do D and Y identify in current Indigo NXT model-number documentation?","D = Dice and Y = Half-Dice."],
  ["What should be measured besides the final equipment footprint?","Required clearances, service access and the entire delivery path."],
  ["CNF0201 and CNF0202 have the same listed production. Why might you choose the 0202?","It provides more stored reserve: current literature lists 20 lb versus 10 lb."],
  ["A restaurant's old 600-class machine runs out nightly. Why not immediately quote a 900-class replacement?","First determine actual demand and whether the old machine is producing normally. Scale, dirty condensers or other degradation can make the existing nameplate a poor sizing benchmark."],
  ["What are the three standard CNF dispense selections?","Ice only, water only, or ice and water."],
  ["Why ask about incoming water temperature?","Ice production performance changes with water temperature; use the appropriate published performance data."],
  ["What should happen immediately before releasing an equipment quote?","Verify the exact current manufacturer specifications, compatibility, utilities, clearances and application assumptions."]
 ]
},
franke:{
 name:"Franke Coffee Systems",
 desc:"Bean-to-cup platforms, beverage-program design, peak throughput, water quality and modular options.",
 refs:[
  ["Franke U.S. brochures & current spec sheets","https://www.franke.com/us/en/coffee-systems/resources/brochures-leaflets.html"],
  ["A1000 FLEX","https://www.franke.com/us/en/coffee-systems/products/fully-automatic-coffee-machines/a1000-flex-coffee-machine.html"],
  ["A800 Fresh Brew","https://www.franke.com/us/en/coffee-systems/products/fully-automatic-coffee-machines/a800-fresh-brew-coffee-machine.html"]
 ],
 modules:[
  {title:"Platform map",summary:"Start with the beverage program, then choose the platform.",points:[
   ["A300 Fresh Brew","Compact fresh-brew bean-to-cup platform; Franke currently positions it as a low-voltage 120V solution."],
   ["A400 Fresh Brew","Fresh-brew bean-to-cup platform with two bean hoppers and dedicated grinders; suited to compact self-service fresh-coffee programs."],
   ["A600","Fully automatic espresso-based beverage platform. Do not confuse it with a fresh-brew coffee machine."],
   ["A800 Fresh Brew","Brew-on-demand fresh coffee platform; Franke currently lists up to three bean types, hot or iced coffee, and up to 250 cups/day."],
   ["A1000 / A1000 FLEX","A1000 is a high-capability espresso/specialty platform; A1000 FLEX combines espresso-based beverages and freshly brewed coffee in one system. Franke currently lists FLEX at up to 300 cups/day."],
   ["S700 / Mytico","Different workflow categories from the fully automatic A-line. Match labor model and desired customer experience before assuming fully automatic is the answer."]
  ]},
  {title:"Beverage-program design",summary:"The menu is the equipment specification in disguise.",points:[
   ["Coffee versus espresso","Determine whether 'coffee' means fresh-brewed coffee, Americano, or both. That distinction can change the platform."],
   ["Milk","Document dairy and alternative milks, expected volume and whether simultaneous/multiple milk handling is required."],
   ["Flavor and powder","Count syrups/flavors and powder products such as chocolate. A1000 FLEX supports a Flavor Station with up to six flavors."],
   ["Hot and iced","Confirm the iced menu. A1000 FLEX includes Cold Water Bypass capability for iced beverages."],
   ["Cup sizes","Cup sizes affect recipes, clearances, throughput and the customer interface."]
  ]},
  {title:"Throughput & architecture",summary:"Cups per day is not a queue model.",points:[
   ["Peak-hour load","Translate daily volume into the busiest operating window. 250 drinks/day can be easy or punishing depending on concentration and beverage complexity."],
   ["Service points","One high-capacity machine is still one ordering/dispensing point. Multiple machines can improve simultaneous throughput."],
   ["Workload separation","High-volume fresh coffee can be separated from milk-heavy specialty drinks when the business case supports it."],
   ["Redundancy","Multiple machines can preserve service if one unit is unavailable. Balance that benefit against capital cost, counter space, utilities and maintenance."],
   ["Customer objective","A coffee program that is a traffic driver may justify a different architecture than an amenity program with the same daily cup count."]
  ]},
  {title:"Milk, flavor & automation",summary:"Accessories are part of the operating design.",points:[
   ["FoamMaster","Automates milk and milk-foam preparation for supported configurations."],
   ["iQFlow","Franke technology focused on extraction control and consistency."],
   ["CleanMaster","Integrated/automated cleaning capability on supported configurations."],
   ["Flavor Station","Automates flavor dosing; current A1000 FLEX material states up to six flavors."],
   ["Grounds management","For high-volume self-service, consider how used grounds are handled. A grounds chute can reduce interruptions where the configuration/site supports it."]
  ]},
  {title:"Water, cleaning & PM",summary:"Protect beverage quality and the equipment investment.",points:[
   ["Water test","Do not treat 'there is a filter' as a water analysis. Verify actual site water against the current Franke specification."],
   ["Treatment","Select filtration/treatment to address the measured water condition and manufacturer requirements."],
   ["Cleaning","Confirm who performs daily cleaning, when it occurs and how the selected cleaning system fits the labor model."],
   ["Preventive maintenance","For mission-critical coffee programs, planned maintenance and warranty options belong in the business discussion, not as an afterthought."],
   ["Reliability chain","Water quality → treatment → cleaning/PM → reliability → beverage consistency → customer experience."]
  ]},
  {title:"Site & quote checklist",summary:"Build the complete system, not just the machine.",points:[
   ["Menu","Fresh brew, espresso, milk, alternatives, powders, flavors, hot/iced and cup sizes."],
   ["Demand","Daily cups, peak-window cups, drink mix and acceptable queue."],
   ["Operation","Staffed versus self-service, cleaning responsibility and customer experience."],
   ["Utilities","Exact electrical, water, drain and accessory requirements."],
   ["Space","Machine plus cooling/flavor/accessories, service clearances and counter penetrations."],
   ["Accessibility","Coordinate applicable accessibility requirements with the project team/AHJ; do not make unsupported code determinations."],
   ["Verify","Use current Franke literature and the exact quoted configuration before order placement."]
  ]}
 ],
 quiz:[
  ["Why is an A600 not automatically a fit for a store that wants regular fresh-brew coffee?","A600 is an espresso-based beverage platform; first determine whether the program requires true fresh-brew coffee."],
  ["What problem does A1000 FLEX solve that an espresso-only platform does not?","It combines espresso-based beverages and freshly brewed coffee in one system."],
  ["Why is 250 cups/day insufficient information for sizing?","It says nothing about how concentrated demand is, drink complexity, simultaneous users or acceptable queue length."],
  ["Why might two smaller fresh-brew machines outperform one larger machine operationally?","They create simultaneous service points and redundancy, though space, utilities, cost and maintenance must also be considered."],
  ["What should you ask when a customer says they need 'regular coffee'?","Clarify whether they mean fresh-brewed coffee, Americano, or both."],
  ["What does FoamMaster address?","Automated preparation of milk and milk foam on supported configurations."],
  ["What does a Flavor Station add to the system?","Automated flavor dosing; current A1000 FLEX material supports up to six flavors."],
  ["Why is a grounds chute valuable in a high-volume self-service application?","It can reduce interruptions caused by a small internal grounds container, when the machine/site configuration supports the chute."],
  ["Why test water instead of simply adding a generic filter?","Treatment should address the actual site water and current manufacturer requirements; the wrong treatment may not solve the relevant condition."],
  ["What should be evaluated with a two-milk program?","Milk types, expected volume, cooling/storage configuration, supported machine options, cleaning and workflow."],
  ["Why can redundancy be financially relevant?","If coffee drives traffic or revenue, keeping part of the program operating during a service event can have business value."],
  ["What is the final step before quoting a Franke configuration?","Verify the exact machine, options, utilities, dimensions, water requirements and compatibility in current Franke documentation."]
 ]
}
};

const scenarios={
 manitowoc:{id:"manitowoc-restaurant-001",title:"Restaurant Ice System",opening:"Dealer: I have a 150-seat full-service restaurant replacing an older ice machine. The owner says his friend has a 900-pound Manitowoc and wants the same thing. Can you quote it?",profile:{
  application:"150-seat full-service restaurant. Ice serves a full bar, fountain beverages, iced tea/water, three bar wells and some kitchen prep. No seafood display or large cooler filling.",
  existing:"Approximately 14-year-old 600-class Manitowoc half-dice machine on roughly a 400-pound bin. Service history notes heavy scale and a very dirty condenser; even after cleaning it remains below expected production. Shortages were less severe when the machine was newer.",
  demand:"The bin is generally full around 4 PM and empty around 8:30 PM on busy Friday/Saturday service. They buy roughly five to eight 20-pound bags on a busy night.",
  environment:"Back-of-house utility room near the kitchen. Roughly 80–85°F in summer; incoming water about 65°F. The room gets hotter when the current air-cooled machine runs.",
  utilities:"208–230V single-phase, potable water and floor drain are available.",
  physical:"8 by 10 foot room, 9 foot ceiling, 48 inches usable width, 36 inch doorway and straight delivery approach.",
  preferences:"Keep half-dice. Owner initially asks for a 900-pound machine because a friend has one.",
  training_goal:"Trainee should diagnose demand and existing-machine condition, separate production from storage, consider site conditions/condenser choice, verify utilities and fit, then make a defensible recommendation without reflexively copying the friend's 900-class machine."
 }},
 franke:{id:"franke-cstore-001",title:"Convenience Store Coffee Program",opening:"Dealer: New convenience store. The owner wants an A600 and expects about 250 coffee beverages per day. They want regular coffee, espresso drinks, cappuccinos, lattes and iced coffee. Can you price it?",profile:{
  application:"New convenience store, fully self-service. Coffee is intended to be a major traffic driver.",
  menu:"12, 16 and 20 oz. Regular and decaf fresh-brew coffee, espresso, Americano, cappuccino, latte and iced beverages.",
  demand:"About 250 drinks/day, with 120–140 between 5:30 and 9:00 AM. Owner considers a line of six unacceptable.",
  mix:"Morning estimate: 60% fresh-brew coffee, 30% milk-based espresso beverages, 10% straight espresso/Americano. Later demand shifts toward specialty and iced beverages.",
  ingredients:"Regular and decaf coffee plus dedicated espresso if practical. Whole milk and oat milk. Vanilla, caramel, hazelnut and mocha initially, with room to expand.",
  utilities:"New construction; 208V power, water and drains can be provided as required.",
  physical:"Original counter allocation 48 inches wide by 30 inches deep. Architect can expand the coffee counter up to 10 feet because project is still in design.",
  priorities:"Fast self-service, short morning queues, reliability and redundancy are valuable because coffee drives traffic.",
  training_goal:"Trainee should recognize the A600 mismatch for fresh-brew coffee, analyze peak throughput rather than daily rating alone, discover menu/milk/flavor/site requirements and build a defensible architecture. Multiple solutions are acceptable."
 }}
};

let current=null,messages=[],busy=false;

function home(){current=null;document.querySelector("#app").innerHTML=`<section class="hero"><div class="eyebrow">Internal Training Prototype</div><h1>Don Stevens Training Center</h1><p class="sub">Build manufacturer knowledge, strengthen application discovery and practice defensible equipment recommendations.</p></section><h2>Select a product line</h2><div class="grid">${Object.entries(lines).map(([k,v])=>`<div class="card click" onclick="line('${k}')"><span class="tag">Product line</span><h3>${v.name}</h3><p>${v.desc}</p></div>`).join("")}</div>`}

function line(k){current=k;let v=lines[k];document.querySelector("#app").innerHTML=`<div class="back" onclick="home()">← Product lines</div><section class="hero"><div class="eyebrow">Product Line</div><h1>${v.name}</h1><p class="sub">${v.desc}</p></section><div class="grid"><div class="card click" onclick="quick('${k}')"><span class="tag">Reference</span><h3>Quick Facts & References</h3><p>${v.modules.length} field-reference modules sourced from current manufacturer material and sales application guidance.</p></div><div class="card click" onclick="study('${k}')"><span class="tag">Learn</span><h3>Study Up</h3><p>${v.quiz.length} knowledge checks covering product, application and discovery reasoning.</p></div><div class="card click" onclick="scenario('${k}')"><span class="tag">AI scenario</span><h3>Scenario Training</h3><p>Have a natural dealer/customer conversation, discover the application and defend your recommendation.</p></div></div>`}

function quick(k){let v=lines[k];document.querySelector("#app").innerHTML=`<div class="back" onclick="line('${k}')">← ${v.name}</div><h1>Quick Facts & References</h1><p class="sub">Field-ready product knowledge plus application guidance. Manufacturer specifications remain the source of truth.</p><div class="legend"><span class="verified">Verified specification</span><span class="guidance">Sales guidance</span><span class="reviewed">Reviewed ${reviewed}</span></div>${v.modules.map((m,i)=>`<section class="studysection"><div class="label">Module ${i+1}</div><h2>${m.title}</h2><p class="sub small">${m.summary}</p><div class="facts">${m.points.map((x,j)=>`<div class="fact"><div class="label">${x[0]}</div><b>${x[1]}</b></div>`).join("")}</div></section>`).join("")}<h2>Current manufacturer sources</h2><div class="card">${v.refs.map(r=>`<p><a href="${r[1]}" target="_blank" rel="noopener">${r[0]} ↗</a></p>`).join("")}<div class="source">Verify exact product specifications, compatibility and installation requirements in current manufacturer documentation before quotation or order placement.</div></div>`}

function study(k){let v=lines[k];document.querySelector("#app").innerHTML=`<div class="back" onclick="line('${k}')">← ${v.name}</div><h1>Study Up</h1><p class="sub">Work through the knowledge checks. Reveal the answer only after committing to your own response.</p><div class="quizlist">${v.quiz.map((q,i)=>`<div class="card quiz"><div class="label">Knowledge check ${i+1} of ${v.quiz.length}</div><h3>${q[0]}</h3><button class="btn alt" onclick="this.hidden=true;this.nextElementSibling.hidden=false">Reveal answer</button><div class="answer" hidden><div class="label">Answer</div><p>${q[1]}</p></div></div>`).join("")}</div>`}

function scenario(k){current=k;messages=[{role:"assistant",content:scenarios[k].opening}];renderScenario()}

function renderScenario(){
 let s=scenarios[current];
 document.querySelector("#app").innerHTML=`<div class="back" onclick="line('${current}')">← ${lines[current].name}</div><div class="scenariohead"><div><div class="eyebrow">AI Scenario Training</div><h1>${s.title}</h1></div><span class="ai-status">AI dealer/customer</span></div><div class="scenario ai-layout"><div><div class="chat" id="chat">${messages.map(m=>`<div class="msg ${m.role==="assistant"?"dealer":"trainee"}">${esc(m.content)}</div>`).join("")}${busy?'<div class="msg dealer thinking">Dealer is thinking…</div>':""}</div><div class="inputrow"><textarea id="q" placeholder="Ask a discovery question, explain your reasoning, or make a recommendation…" ${busy?"disabled":""}></textarea><button class="btn" onclick="askAI()" ${busy?"disabled":""}>Send</button></div></div><aside class="card coach"><div class="label">How to use this scenario</div><p>Talk to the dealer/customer naturally. There is no keyword checklist and no live discovery score.</p><button class="btn alt" onclick="coachAI()" ${busy?"disabled":""}>I'm stuck — coach me</button><button class="btn alt" onclick="recommendAI()" ${busy?"disabled":""}>I'm ready to recommend</button><button class="btn alt" onclick="reviewAI()" ${busy?"disabled":""}>Final review</button><div class="source">AI responses are training simulations. Verify product specifications in current manufacturer documentation.</div></aside></div>`;
 let c=document.querySelector("#chat"); if(c)c.scrollTop=c.scrollHeight;
 let q=document.querySelector("#q"); if(q&&!busy){q.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();askAI()}})}
}

async function callAI(extra){
 const s=scenarios[current];
 const payload={scenario:{id:s.id,title:s.title,opening:s.opening,...s.profile,mode:extra||"dealer conversation"},messages:messages.map(m=>({role:m.role,content:m.content}))};
 const res=await fetch(API,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
 const data=await res.json().catch(()=>({}));
 if(!res.ok)throw new Error(data.details||data.error||`AI request failed (${res.status})`);
 return data.reply;
}
async function runAI(extra,userText){
 if(busy)return;
 if(userText)messages.push({role:"user",content:userText});
 busy=true;renderScenario();
 try{messages.push({role:"assistant",content:await callAI(extra)})}
 catch(e){messages.push({role:"assistant",content:"AI connection error: "+e.message+" Please try again."})}
 busy=false;renderScenario();
}
function askAI(){let q=document.querySelector("#q");let text=q&&q.value.trim();if(text)runAI("dealer conversation",text)}
function coachAI(){runAI("COACH MODE: Step out of dealer character briefly. Give one concise conceptual hint about the most valuable discovery area the trainee should consider next. Do not reveal the answer, model/SKU, or hidden facts they have not discovered. Prefix the response 'Coaching note:'.","I’m stuck. Coach me without giving me the answer.")}
function recommendAI(){runAI("RECOMMENDATION MODE: The trainee says they are ready to recommend. Invite them to state the complete recommendation and rationale. After they do, challenge unsupported assumptions naturally before accepting the recommendation.","I’m ready to make my recommendation.")}
function reviewAI(){runAI("FINAL REVIEW MODE: Stop role-play. Review the trainee's conversation. Give concise sections for Strengths, Discovery missed or weak, Technical/application risks, and Next step. Evaluate process and rationale rather than requiring one predetermined SKU. Do not invent product specifications.","Please give me my final scenario review based on this conversation.")}

function esc(s){return String(s).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c])).replace(/\n/g,"<br>")}
home();