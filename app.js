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
manitowoc:[
{id:"manitowoc-restaurant-001",category:"Restaurant / Bar",title:"Restaurant Ice System",opening:"Dealer: I have a 150-seat full-service restaurant replacing an older ice machine. The owner says his friend has a 900-pound Manitowoc and wants the same thing. Can you quote it?",profile:{application:"150-seat full-service restaurant. Ice serves a full bar, fountain beverages, iced tea/water, three bar wells and some kitchen prep.",existing:"14-year-old 600-class half-dice Manitowoc on roughly a 400-pound bin; scaled and underperforming.",demand:"Bin is generally full around 4 PM and empty around 8:30 PM on busy Friday/Saturday service; five to eight 20-pound bags are purchased on those nights.",environment:"Back-of-house utility room near kitchen, 80–85°F summer, incoming water about 65°F; current air-cooled machine adds heat.",utilities:"208–230V single-phase, potable water and floor drain.",physical:"8 x 10 foot room, 9 foot ceiling, 48 inches usable width, 36 inch doorway, straight approach.",preferences:"Keep half-dice.",training_goal:"Separate production from storage, account for degraded existing equipment and environment, verify fit/utilities, and resist copying an unrelated 900-class installation."}},
{id:"manitowoc-hotel-001",category:"Hotel",title:"Guest-Floor Ice",opening:"Dealer: The architect has one NEO UDF0240A on each guest floor of a new 120-room hotel. Thirty rooms per floor. Can you confirm that package?",profile:{application:"Four guest floors, 30 rooms each. Guests fill 3-quart room ice buckets themselves.",operation:"Unattended guest self-service; staff should not need to scoop or hand out ice.",demand:"Heaviest use is after check-in, roughly 3–10 PM. Exact bucket fills per occupied room are not yet measured.",environment:"Conditioned corridor around 72–75°F. Guestrooms are across the hall, so noise matters.",utilities:"New construction with 115V power, water and drains at each location.",physical:"Architect initially allowed a 30-inch alcove but can revise to 36 inches.",schedule:"Owner asks whether production can shut down 10 PM–7 AM because of nearby guestrooms.",training_goal:"Recognize user-interface mismatch of a scoop-bin undercounter unit for unattended hotel service; discover demand/noise/schedule/fit and evaluate modular cuber plus compatible hotel dispenser without assuming a single SKU."}},
{id:"manitowoc-healthcare-001",category:"Healthcare / SNF",title:"Nurses' Station Nugget Ice",opening:"Dealer: A skilled nursing facility wants to replace an old countertop soft-ice machine at a nurses' station. They say it makes about 200 pounds a day. What would you put there?",profile:{application:"Staff-only nurses' station. Ice and water are dispensed into cups for residents; patients do not access the machine directly.",demand:"Steady use with rushes at breakfast 7–9, lunch 11:30–1:30 and dinner/med pass 4:30–7; sometimes 10–15 cups consecutively.",ice:"They want to retain chewable nugget-style ice.",utilities:"115V, potable water and drain available.",physical:"Existing space is about 17 inches wide x 23 deep x 34 high; 25-inch counter depth, 48 inches counter-to-upper-cabinet and 30 inches total width. Facility can remove the upper cabinet if needed.",priorities:"Easy staff dispensing and minimizing hand-contact points are valued.",training_goal:"Evaluate countertop nugget production versus reserve, physical clearance, user interface and touchless options; distinguish production from 10/20-pound storage choices."}},
{id:"manitowoc-cstore-001",category:"Convenience Store",title:"High-Volume Beverage Ice",opening:"Dealer: A new convenience store wants one big ice machine for the fountain area and back counter. They expect strong morning and lunch traffic. Can you size something?",profile:{application:"Self-service fountain beverages plus employee-filled back-counter ice wells. No bagged-ice production.",demand:"Projected 650 fountain drinks/day, heavily concentrated 6–9 AM and 11 AM–2 PM. Two back-counter wells are filled before lunch and topped off once.",ice:"Owner is open to cube format but wants good beverage displacement and easy fountain dispensing.",environment:"Machine room is conditioned but compact; summer ambient expected around 78°F.",utilities:"New construction; 208–230V, water and floor drain can be provided.",physical:"42 inches usable width; 36-inch doorway. Dispenser/fountain interface has not yet been finalized.",priorities:"Fast self-service and avoiding lunchtime outages.",training_goal:"Force demand/application discovery, clarify whether one central production/storage system or dispenser integration is intended, and avoid selecting a head before understanding the beverage/dispenser architecture."}},
{id:"manitowoc-school-001",category:"School / Institution",title:"School Cafeteria Replacement",opening:"Dealer: A high school cafeteria has an old 500-pound machine and wants a direct replacement. They serve about 900 lunches. Can I just quote the current equivalent?",profile:{application:"High-school cafeteria. Ice is used for beverage stations and limited kitchen prep.",demand:"Nearly all student beverage demand occurs in two lunch waves totaling about 100 minutes. The machine has long recovery time overnight.",existing:"Old 500-class cuber on a relatively small bin. Staff report the bin empties during second lunch but is full every morning.",environment:"Conditioned kitchen support room, about 76°F.",utilities:"208–230V single phase, water and drain.",physical:"Adequate width for a larger bin; doorway and ceiling are not restrictive.",priorities:"Budget-sensitive; staff prefer not to increase electrical load unless needed.",training_goal:"Explore whether storage rather than production is the primary constraint when demand is highly concentrated with long recovery periods."}},
{id:"manitowoc-banquet-001",category:"Banquet / Event",title:"Event Venue Peak Load",opening:"Dealer: A banquet hall says their 700-pound machine is fine most days but gets crushed at weddings. They want to jump to the biggest head that fits. Thoughts?",profile:{application:"Event venue with two bars, water service and occasional ice tubs for bottled beverages.",demand:"Weekdays are light. Saturday events of 250–350 guests create a sharp 4–10 PM draw. Existing bin is usually full before events and empty by about 8 PM.",existing:"700-class machine is maintained and service reports indicate normal production.",environment:"Mechanical room is well ventilated and around 75–80°F during events.",utilities:"208–230V, water and drain.",physical:"Space can accept substantially more storage; headroom and delivery path are good.",priorities:"Avoid buying bagged ice while not grossly oversizing daily production for six quiet days.",training_goal:"Test peak-reserve reasoning and whether larger storage, production or both are justified for intermittent event demand."}},
{id:"manitowoc-retrofit-001",category:"Retrofit / Access",title:"Basement Retrofit",opening:"Dealer: The customer picked an Indigo head and bin online. Capacity looks fine. I mostly need a price. Anything else you need?",profile:{application:"Neighborhood tavern replacement; selected capacity appears plausible based on reported use.",existing:"Old modular cuber in basement.",physical:"Final location has 38 inches of width, but access includes a 32-inch exterior door, tight 90-degree stair landing and 30-inch basement doorway.",environment:"Basement runs warm in summer with modest ventilation.",utilities:"Existing 115V circuit only; selected online head requires different electrical service.",priorities:"Owner wants minimal construction changes.",training_goal:"Teach that a technically adequate machine can still be the wrong quote because of delivery path, electrical and installation constraints."}},
{id:"manitowoc-newbuild-001",category:"New Construction",title:"New Restaurant — No Benchmark",opening:"Dealer: New 200-seat restaurant, no existing equipment and the consultant just wrote '800 lb ice machine' on the schedule. Can you help me validate it?",profile:{application:"200-seat casual restaurant with full bar, fountain beverages, water/tea and two kitchen prep uses.",demand:"No historical ice usage exists. Projected covers are 350 weekdays and 600 peak Saturdays; bar represents about 35% of sales.",ice:"Bar manager prefers half-dice.",environment:"Dedicated equipment room is conditioned to design maximum 80°F.",utilities:"208–230V single phase, water and drain planned but final rough-in is not complete.",physical:"Architect has 36 inches width and 8-foot ceiling; delivery path is straightforward.",priorities:"Avoid change orders and establish a defensible design basis before rough-in.",training_goal:"Force actual demand discovery and documented assumptions when no existing machine exists; coordinate utilities/space before construction is locked."}}
],
franke:[
{id:"franke-cstore-001",category:"Convenience Store",title:"Convenience Store Coffee Program",opening:"Dealer: New convenience store. The owner wants an A600 and expects about 250 coffee beverages per day. They want regular coffee, espresso drinks, cappuccinos, lattes and iced coffee. Can you price it?",profile:{application:"New convenience store, fully self-service; coffee is a major traffic driver.",menu:"12, 16 and 20 oz; regular and decaf fresh-brew coffee, espresso, Americano, cappuccino, latte and iced beverages.",demand:"250 drinks/day; 120–140 between 5:30 and 9 AM; line of six is unacceptable.",mix:"Morning: 60% fresh brew, 30% milk-based espresso, 10% espresso/Americano; later shifts specialty/iced.",ingredients:"Regular/decaf coffee, dedicated espresso if practical, whole and oat milk, vanilla/caramel/hazelnut/mocha.",utilities:"New construction; 208V, water and drains can be provided.",physical:"Original 48 x 30 inch counter can expand up to 10 feet.",priorities:"Fast self-service, short queues, reliability and redundancy.",training_goal:"Recognize A600 mismatch for fresh brew, analyze peak throughput, menu/milk/flavor/site needs and defend an architecture."}},
{id:"franke-hotel-001",category:"Hotel Breakfast",title:"Hotel Breakfast Coffee",opening:"Dealer: A 180-room hotel wants to replace two traditional airpots with one automatic coffee machine in the breakfast area. They want regular, decaf and some lattes. What should we look at?",profile:{application:"Complimentary hotel breakfast, guest self-service.",menu:"Regular and decaf coffee are core; latte/cappuccino are secondary. 12 and 16 oz cups.",demand:"Breakfast 6–10 AM; approximately 140 occupied rooms on a typical weekday and near sellout on weekends. Biggest queue is 7–8:30 AM.",ingredients:"Whole milk only initially; no syrups requested.",operation:"Breakfast attendant is present but also handles food and cannot constantly manage the machine.",utilities:"120V exists; adding 208V is possible but requires electrical work. Water is available; drain location needs confirmation.",physical:"About 44 inches of counter width.",priorities:"Guest speed and simple cleaning matter more than a broad specialty menu.",training_goal:"Compare fresh-brew-heavy demand with specialty needs, peak queue/service points and utility implications rather than automatically choosing the most capable machine."}},
{id:"franke-office-001",category:"Office / Amenity",title:"Corporate Office Amenity",opening:"Dealer: A corporate office wants a premium bean-to-cup machine for about 90 employees. They asked for an A1000 because it looks impressive. Should we quote it?",profile:{application:"Employee amenity in a corporate breakroom; no revenue generation.",menu:"Coffee, espresso, Americano, cappuccino and latte. No fresh-brew requirement has been confirmed.",demand:"Roughly 70–100 beverages/day, with short peaks at 8–9 AM and after lunch.",ingredients:"One espresso bean, whole milk; oat milk is a possible future request. No flavors today.",utilities:"208V can be provided; water and drain nearby.",physical:"Plenty of counter width but upper cabinets limit height.",priorities:"Premium experience, low daily labor and reasonable capital cost.",training_goal:"Challenge prestige-driven overspecification; discover actual menu, volume, milk, fit and business objective before choosing platform."}},
{id:"franke-healthcare-001",category:"Healthcare",title:"Hospital Staff Coffee",opening:"Dealer: Hospital administration wants self-service specialty coffee for a 24-hour staff lounge. They estimate 300 drinks a day. Can we do one machine?",profile:{application:"24/7 staff lounge, self-service.",menu:"Coffee/Americano, espresso, cappuccino, latte, hot chocolate and iced drinks.",demand:"About 300/day spread across three shifts, but shift changes create 30–45 minute peaks.",ingredients:"Regular espresso, decaf option desired, whole milk and oat milk, chocolate powder.",operation:"Environmental services can clean on a schedule but not during every shift change.",utilities:"208V, water and drain available.",physical:"72 inches of counter width.",priorities:"Uptime is critical; a total outage is unacceptable.",training_goal:"Explore peak throughput, redundancy, milk/powder configuration, cleaning responsibility and 24/7 uptime rather than daily cups alone."}},
{id:"franke-qsr-001",category:"QSR",title:"Drive-Thru Specialty Coffee",opening:"Dealer: A QSR wants to add lattes and iced specialty drinks to drive-thru. They say 180 drinks a day. What Franke should I quote?",profile:{application:"Staff-operated drive-thru; speed of service is measured closely.",menu:"Espresso, Americano, latte, cappuccino, flavored iced latte and hot chocolate.",demand:"180/day but 75 can occur in the 7–9 AM window alongside food production.",ingredients:"Whole and nonfat milk, four syrups and chocolate powder.",operation:"Employees build drinks; simultaneous milk/espresso workflow matters.",utilities:"208V, water and drain available.",physical:"Tight 40-inch equipment zone shared with other drive-thru equipment.",priorities:"Ticket time, repeatability and compact footprint.",training_goal:"Make trainee investigate peak complexity, milk/flavor/powder configuration, simultaneous workflow and complete accessory footprint."}},
{id:"franke-cafe-001",category:"Bakery / Café",title:"Bakery Café Expansion",opening:"Dealer: A bakery café is tired of training baristas and wants to replace its traditional espresso machine with a Franke. They do about 220 coffee drinks a day. Where do we start?",profile:{application:"Staffed bakery café transitioning from traditional espresso workflow.",menu:"Espresso, Americano, cappuccino, latte, mocha and seasonal flavored drinks; batch coffee remains separate.",demand:"220 specialty drinks/day, busiest 7–10 AM and weekend brunch.",ingredients:"Two espresso bean choices are desired, whole and oat milk, chocolate plus six rotating flavors.",operation:"Owner wants consistency and reduced training but still wants staff to interact with guests.",utilities:"208V, water and drain.",physical:"Existing espresso station has 60 inches of width.",priorities:"Consistency, menu breadth and labor simplification without sacrificing throughput.",training_goal:"Clarify that fresh brew is separate, then configure specialty platform around beans, milk, flavors, powder, throughput and staff workflow."}},
{id:"franke-water-001",category:"Water / Reliability",title:"Repeat Service Calls",opening:"Dealer: This customer says their automatic coffee machine is unreliable and wants to replace it with a bigger Franke. Service keeps finding scale. Can we just size the replacement?",profile:{application:"Busy office café with about 160 drinks/day.",menu:"Standard espresso/milk program.",problem:"Multiple service calls cite scale accumulation. Customer has a generic carbon filter but no recent water analysis.",water:"Municipal water; hardness and alkalinity have not been measured for this project.",utilities:"Existing power/water/drain are otherwise adequate.",priorities:"Customer wants fewer breakdowns and is focused on machine brand/capacity.",training_goal:"Make water analysis/treatment part of specification and avoid treating a water-quality failure as a capacity problem."}},
{id:"franke-lowvolume-001",category:"Low-Volume Amenity",title:"Auto Dealership Lounge",opening:"Dealer: An auto dealership wants the same premium Franke they saw at an airport lounge. They serve maybe 35 cups a day. Can I quote an A1000?",profile:{application:"Customer waiting lounge; complimentary self-service beverages.",menu:"Coffee, espresso, cappuccino, latte and hot chocolate; no iced menu.",demand:"25–40 drinks/day with small morning and Saturday peaks.",ingredients:"One coffee/espresso bean, one milk, chocolate powder; no syrups.",utilities:"120V is currently available. Water nearby; adding drain/power has cost.",physical:"36-inch counter area.",priorities:"Premium appearance and ease of use, but management is cost conscious.",training_goal:"Practice right-sizing and explaining why maximum platform capability may not create value for a low-volume amenity."}}
]};

let current=null,currentScenario=null,messages=[],busy=false;

function home(){current=null;document.querySelector("#app").innerHTML=`<section class="hero"><div class="eyebrow">Internal Training Prototype</div><h1>Don Stevens Training Center</h1><p class="sub">Build manufacturer knowledge, strengthen application discovery and practice defensible equipment recommendations.</p></section><h2>Select a product line</h2><div class="grid">${Object.entries(lines).map(([k,v])=>`<div class="card click" onclick="line('${k}')"><span class="tag">Product line</span><h3>${v.name}</h3><p>${v.desc}</p></div>`).join("")}</div>`}

function line(k){current=k;let v=lines[k];document.querySelector("#app").innerHTML=`<div class="back" onclick="home()">← Product lines</div><section class="hero"><div class="eyebrow">Product Line</div><h1>${v.name}</h1><p class="sub">${v.desc}</p></section><div class="grid"><div class="card click" onclick="quick('${k}')"><span class="tag">Reference</span><h3>Quick Facts & References</h3><p>${v.modules.length} field-reference modules sourced from current manufacturer material and sales application guidance.</p></div><div class="card click" onclick="study('${k}')"><span class="tag">Learn</span><h3>Study Up</h3><p>${v.quiz.length} knowledge checks covering product, application and discovery reasoning.</p></div><div class="card click" onclick="scenario('${k}')"><span class="tag">AI scenario</span><h3>Scenario Training</h3><p>Have a natural dealer/customer conversation, discover the application and defend your recommendation.</p></div></div>`}

function quick(k){let v=lines[k];document.querySelector("#app").innerHTML=`<div class="back" onclick="line('${k}')">← ${v.name}</div><h1>Quick Facts & References</h1><p class="sub">Field-ready product knowledge plus application guidance. Manufacturer specifications remain the source of truth.</p><div class="legend"><span class="verified">Verified specification</span><span class="guidance">Sales guidance</span><span class="reviewed">Reviewed ${reviewed}</span></div>${v.modules.map((m,i)=>`<section class="studysection"><div class="label">Module ${i+1}</div><h2>${m.title}</h2><p class="sub small">${m.summary}</p><div class="facts">${m.points.map((x,j)=>`<div class="fact"><div class="label">${x[0]}</div><b>${x[1]}</b></div>`).join("")}</div></section>`).join("")}<h2>Current manufacturer sources</h2><div class="card">${v.refs.map(r=>`<p><a href="${r[1]}" target="_blank" rel="noopener">${r[0]} ↗</a></p>`).join("")}<div class="source">Verify exact product specifications, compatibility and installation requirements in current manufacturer documentation before quotation or order placement.</div></div>`}

function study(k){let v=lines[k];document.querySelector("#app").innerHTML=`<div class="back" onclick="line('${k}')">← ${v.name}</div><h1>Study Up</h1><p class="sub">Work through the knowledge checks. Reveal the answer only after committing to your own response.</p><div class="quizlist">${v.quiz.map((q,i)=>`<div class="card quiz"><div class="label">Knowledge check ${i+1} of ${v.quiz.length}</div><h3>${q[0]}</h3><button class="btn alt" onclick="this.hidden=true;this.nextElementSibling.hidden=false">Reveal answer</button><div class="answer" hidden><div class="label">Answer</div><p>${q[1]}</p></div></div>`).join("")}</div>`}

function scenario(k){current=k;scenarioMenu(k)}
function scenarioMenu(k){let bank=scenarios[k];document.querySelector("#app").innerHTML=`<div class="back" onclick="line('${k}')">← ${lines[k].name}</div><section class="hero"><div class="eyebrow">AI Scenario Training</div><h1>Choose your practice</h1><p class="sub">Start a random scenario for variety, or target a specific application category.</p></section><div class="card"><h3>Surprise me</h3><p>Randomly selects from ${bank.length} scenarios and avoids the most recently used scenarios on this device.</p><button class="btn" onclick="startRandom('${k}')">Start random scenario</button></div><h2>Practice by category</h2><div class="grid">${bank.map((s,i)=>`<div class="card click" onclick="startScenario('${k}',${i})"><span class="tag">${s.category}</span><h3>${s.title}</h3><p>Practice this application.</p></div>`).join("")}</div>`}
function recentKey(k){return "dsRecent_"+k}
function startRandom(k){let bank=scenarios[k],recent=JSON.parse(localStorage.getItem(recentKey(k))||"[]"),eligible=bank.map((s,i)=>i).filter(i=>!recent.includes(bank[i].id));if(!eligible.length)eligible=bank.map((s,i)=>i);startScenario(k,eligible[Math.floor(Math.random()*eligible.length)])}
function startScenario(k,i){current=k;currentScenario=scenarios[k][i];let key=recentKey(k),recent=JSON.parse(localStorage.getItem(key)||"[]").filter(x=>x!==currentScenario.id);recent.unshift(currentScenario.id);localStorage.setItem(key,JSON.stringify(recent.slice(0,Math.min(4,scenarios[k].length-1))));messages=[{role:"assistant",content:currentScenario.opening}];renderScenario()}

function renderScenario(){
 let s=currentScenario;
 document.querySelector("#app").innerHTML=`<div class="back" onclick="line('${current}')">← ${lines[current].name}</div><div class="scenariohead"><div><div class="eyebrow">AI Scenario Training</div><h1>${s.title}</h1></div><span class="ai-status">AI dealer/customer</span></div><div class="scenario ai-layout"><div><div class="chat" id="chat">${messages.map(m=>`<div class="msg ${m.role==="assistant"?"dealer":"trainee"}">${esc(m.content)}</div>`).join("")}${busy?'<div class="msg dealer thinking">Dealer is thinking…</div>':""}</div><div class="inputrow"><textarea id="q" placeholder="Ask a discovery question, explain your reasoning, or make a recommendation…" ${busy?"disabled":""}></textarea><button class="btn" onclick="askAI()" ${busy?"disabled":""}>Send</button></div></div><aside class="card coach"><div class="label">How to use this scenario</div><p>Talk to the dealer/customer naturally. There is no keyword checklist and no live discovery score.</p><button class="btn alt" onclick="coachAI()" ${busy?"disabled":""}>I'm stuck — coach me</button><button class="btn alt" onclick="recommendAI()" ${busy?"disabled":""}>I'm ready to recommend</button><button class="btn alt" onclick="reviewAI()" ${busy?"disabled":""}>Final review</button><div class="source">AI responses are training simulations. Verify product specifications in current manufacturer documentation.</div></aside></div>`;
 let c=document.querySelector("#chat"); if(c)c.scrollTop=c.scrollHeight;
 let q=document.querySelector("#q"); if(q&&!busy){q.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();askAI()}})}
}

async function callAI(extra){
 const s=currentScenario;
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
function reviewAI(){runAI("FINAL REVIEW MODE: Stop role-play. Review the trainee's conversation. Give concise sections for Strengths, Discovery missed or weak, Technical/application risks, and Next step. Evaluate process and rationale rather than requiring one predetermined SKU. EVIDENCE RULE: Credit facts already supplied by the dealer/customer even if the trainee did not ask the perfect question. Do not mark something missed if the conversation already established it. Distinguish information never established from information supplied but not used, and from a trainee assumption that should have been confirmed. Do not invent missing requirements or product specifications. Reference conversation evidence when criticizing a miss.","Please give me my final scenario review based on this conversation.")}

function esc(s){return String(s).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c])).replace(/\n/g,"<br>")}
home();