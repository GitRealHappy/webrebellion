(function initLogicMachines() {
  const yearNode = document.getElementById("year");
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  // ---- Section nav (tabs) ----
  const navLinks = document.querySelectorAll(".cs-nav a[data-section]");
  const sections = document.querySelectorAll(".cs-section");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.dataset.section;
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      sections.forEach((s) => s.classList.remove("active"));
      const next = document.getElementById(target);
      if (next) next.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // ---- Accordions ----
  window.toggleAccordion = function (id) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle("open");
  };

  // ---- Timeline items ----
  window.toggleTimeline = function (el) {
    el.classList.toggle("open");
  };

  // ---- Bit flipper widget ----
  const bitRow = document.getElementById("bitRow");
  if (bitRow) {
    const bitState = [0, 0, 0, 0, 0, 0, 0, 0];
    const ctrlNames = [
      "NUL","SOH","STX","ETX","EOT","ENQ","ACK","BEL","BS","TAB","LF","VT","FF","CR","SO","SI",
      "DLE","DC1","DC2","DC3","DC4","NAK","SYN","ETB","CAN","EM","SUB","ESC","FS","GS","RS","US"
    ];

    bitState.forEach((_, i) => {
      const btn = document.createElement("button");
      btn.className = "bit-btn";
      btn.type = "button";
      btn.textContent = "0";
      btn.addEventListener("click", () => {
        bitState[i] = bitState[i] ? 0 : 1;
        btn.textContent = bitState[i];
        btn.classList.toggle("on", !!bitState[i]);
        updateBitDisplay();
      });
      bitRow.appendChild(btn);
    });

    function updateBitDisplay() {
      const bin = bitState.join("");
      const dec = parseInt(bin, 2);
      document.getElementById("bitBinary").textContent = bin;
      document.getElementById("bitDecimal").textContent = dec;
      let ch;
      if (dec < 32) ch = ctrlNames[dec];
      else if (dec === 127) ch = "DEL";
      else if (dec < 127) ch = "'" + String.fromCharCode(dec) + "'";
      else ch = "— (extended)";
      document.getElementById("bitChar").textContent = ch;
    }
    updateBitDisplay();
  }

  // ---- Logic gate simulator ----
  const gateSvg = document.getElementById("gateSvg");
  if (gateSvg) {
    let gateA = false;
    let gateB = false;
    let currentGate = "AND";

    const gateShapes = {
      AND: '<path class="gate-shape" d="M 95 12 L 130 12 A 23 23 0 0 1 130 58 L 95 58 Z"/>',
      OR:  '<path class="gate-shape" d="M 95 12 Q 110 35 95 58 Q 130 58 153 35 Q 130 12 95 12 Z"/>',
      XOR: '<path class="gate-shape" d="M 95 12 Q 110 35 95 58 Q 130 58 153 35 Q 130 12 95 12 Z"/><path class="wire" d="M 88 12 Q 103 35 88 58" stroke="var(--accent)" stroke-width="1.5" fill="none"/>',
      NOT: '<path class="gate-shape" d="M 95 12 L 95 58 L 145 35 Z"/><circle class="gate-shape" cx="152" cy="35" r="5"/>'
    };

    const gateLabels = {
      AND: '<text x="113" y="38" class="gate-label" text-anchor="middle">&amp;</text>',
      OR:  '<text x="120" y="38" class="gate-label" text-anchor="middle">≥1</text>',
      XOR: '<text x="120" y="38" class="gate-label" text-anchor="middle">=1</text>',
      NOT: '<text x="113" y="38" class="gate-label" text-anchor="middle">1</text>'
    };

    window.toggleGateInput = function (inp) {
      if (inp === "A") {
        gateA = !gateA;
        document.getElementById("gateA").classList.toggle("true", gateA);
        document.getElementById("gateAVal").textContent = gateA ? "1" : "0";
      } else {
        gateB = !gateB;
        document.getElementById("gateB").classList.toggle("true", gateB);
        document.getElementById("gateBVal").textContent = gateB ? "1" : "0";
      }
      updateGate();
    };

    window.selectGate = function (gate) {
      currentGate = gate;
      document.querySelectorAll(".gate-btn").forEach((b) => {
        b.classList.toggle("active", b.dataset.gate === gate);
      });
      updateGate();
    };

    function computeGate() {
      switch (currentGate) {
        case "AND": return gateA && gateB;
        case "OR":  return gateA || gateB;
        case "XOR": return gateA !== gateB;
        case "NOT": return !gateA;
      }
    }

    function updateGate() {
      const result = computeGate();
      const a = gateA ? 1 : 0;
      const b = gateB ? 1 : 0;
      const r = result ? 1 : 0;

      document.getElementById("gateBody").innerHTML = gateShapes[currentGate] + gateLabels[currentGate];

      const wireB = document.getElementById("wireB");
      const gateBToggle = document.getElementById("gateB");
      if (currentGate === "NOT") {
        wireB.style.opacity = "0.2";
        gateBToggle.style.opacity = "0.4";
        gateBToggle.style.pointerEvents = "none";
      } else {
        wireB.style.opacity = "1";
        gateBToggle.style.opacity = "1";
        gateBToggle.style.pointerEvents = "auto";
      }

      document.getElementById("wireA").classList.toggle("live", gateA);
      wireB.classList.toggle("live", gateB && currentGate !== "NOT");
      document.getElementById("wireOut").classList.toggle("live", result);

      const out = document.getElementById("gateOutput");
      out.classList.toggle("true", result);
      document.getElementById("gateOutVal").textContent = r;

      let eq;
      if (currentGate === "NOT") eq = `NOT ${a} = ${r} (${result ? "TRUE" : "FALSE"})`;
      else eq = `${a} ${currentGate} ${b} = ${r} (${result ? "TRUE" : "FALSE"})`;
      document.getElementById("gateOutEq").textContent = eq;
    }
    updateGate();
  }

  // ---- Truth tree widget ----
  const treeDisplay = document.getElementById("treeDisplay");
  if (treeDisplay) {
    const trees = [
      {
        question: 'Test the syllogism: "All A are B. All B are C. ∴ All A are C."',
        steps: [
          { type: "premise",       tag: "PREMISE 1",   text: "All A are B  <code>(A → B)</code>" },
          { type: "premise",       tag: "PREMISE 2",   text: "All B are C  <code>(B → C)</code>" },
          { type: "branch",        tag: "REDUCTIO",    text: "Assume the conclusion is false: there exists some <code>x</code> in A but not in C." },
          { type: "derive",        tag: "STEP",        text: "From P1: x is in A, so x must be in B." },
          { type: "derive",        tag: "STEP",        text: "From P2: x is in B, so x must be in C." },
          { type: "contradiction", tag: "CONTRADICTION", text: "But we assumed x is <em>not</em> in C. ✗ Impossible." }
        ],
        result: { kind: "valid", label: "VALID SYLLOGISM", text: "The assumption breaks. Therefore: All A are C is proven." }
      },
      {
        question: 'Test: "No birds are fish. All fish breathe water. ∴ Some birds breathe water."',
        steps: [
          { type: "premise", tag: "PREMISE 1", text: "No birds are fish  <code>(Bird → ¬Fish)</code>" },
          { type: "premise", tag: "PREMISE 2", text: "All fish breathe water  <code>(Fish → BreathesWater)</code>" },
          { type: "branch",  tag: "TEST",      text: "Try to find a bird that breathes water using only these premises." },
          { type: "derive",  tag: "STEP",      text: "P1 tells us nothing positive about birds — only what they aren't." },
          { type: "derive",  tag: "STEP",      text: "P2 only tells us about fish — and birds are not fish." },
          { type: "derive",  tag: "STEP",      text: "No chain of reasoning connects \"Bird\" to \"BreathesWater\"." }
        ],
        result: { kind: "invalid", label: "INVALID INFERENCE", text: "The conclusion is not entailed by the premises. The argument fails." }
      },
      {
        question: 'Are these statements compatible? "All cats are animals. Some animals are not cats."',
        steps: [
          { type: "premise", tag: "STATEMENT 1", text: "All cats are animals  <code>(Cat → Animal)</code>" },
          { type: "premise", tag: "STATEMENT 2", text: "Some animals are not cats  <code>(∃x: Animal(x) ∧ ¬Cat(x))</code>" },
          { type: "branch",  tag: "WITNESS",     text: "Pick such an animal — call it <code>x</code> (e.g. a dog)." },
          { type: "derive",  tag: "CHECK",       text: "x is an Animal ✓ and x is not a Cat ✓. Both consistent with statement 2." },
          { type: "derive",  tag: "CHECK",       text: "Statement 1 only constrains cats — it says nothing about non-cats like x." },
          { type: "derive",  tag: "CHECK",       text: "No tree branch closes. No contradiction surfaces." }
        ],
        result: { kind: "valid", label: "CONSISTENT", text: "The statements coexist peacefully — they describe different parts of the animal kingdom." }
      }
    ];

    let currentTree = 0;

    window.selectTree = function (idx) {
      currentTree = idx;
      document.querySelectorAll(".tree-option").forEach((b, i) => {
        b.classList.toggle("active", i === idx);
      });
      renderTree();
    };

    function renderTree() {
      const t = trees[currentTree];
      const d = document.getElementById("treeDisplay");
      let html = `<div class="tree-question">${t.question}</div>`;
      t.steps.forEach((s, i) => {
        const indent = s.type === "derive" ? "indent-1" : "";
        html += `
          <div class="tree-step ${s.type} ${indent}" style="animation-delay: ${i * 0.08}s">
            <div class="step-num">${i + 1}</div>
            <div class="step-body">
              <div class="step-tag">${s.tag}</div>
              <div class="step-text">${s.text}</div>
            </div>
          </div>`;
      });
      const r = t.result;
      html += `
        <div class="tree-result ${r.kind === "valid" ? "valid" : "invalid"}" style="animation-delay: ${t.steps.length * 0.08 + 0.1}s">
          <span class="result-label">${r.label}</span>
          ${r.text}
        </div>`;
      d.innerHTML = html;
      d.scrollTop = 0;
    }
    renderTree();
  }
})();
