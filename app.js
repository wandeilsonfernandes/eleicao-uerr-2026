/**
 * TSE-UERR 2026 - Sátira de Apuração Eleitoral: Ciência da Computação
 * Dra. Clenya Rejane Barros de Lima (Chapa 10) vs Msc. Caio de Jesus Gregoratto (Chapa 20)
 */

// 1. LISTA OFICIAL EXTRAÍDA DO PDF SEI/GRR - 25061245 (Págs. 26-28 + Docentes e Técnicos TI)
const ACADEMICOS_BCC = [
  "ADRIAN HARR RODRIGUES",
  "AGRINALDO CLARINDO CARVALHO",
  "ALDEVAM SIMAO DE MELO",
  "ALDO ELYSIO CAMPOS BARBOSA",
  "ALEXANDRE YUKIO OYAMA DE SOUZA",
  "ANA VITORIA ALMEIDA DA SILVA NUNES",
  "ANDERSON THIAGO DA SILVA SILVESTRE",
  "ANDREY PONTE EVANGELISTA DE SOUSA",
  "CAIO RODRIGO ALVES DE OLIVEIRA",
  "CARLOS EDUARDO PINHO DOS SANTOS",
  "CAUA FERNANDES DE ASSIS",
  "CAUA SANDES DA ROCHA",
  "CAUA SILVA LEITAO",
  "CAUE LIMA CRUZ RODRIGUES",
  "CRISTIANO SILVEIRA PONTES",
  "EDUARDO AUGUSTO OLIVEIRA DE SOUZA",
  "EDUARDO HENRIQUE MAGALHÃES DO NASCIMENTO",
  "ELDEN AUGUSTO CASTRO DE LIMA",
  "EMILLY SILVA DE SOUSA",
  "FELIPE DE ALMEIDA VIEIRA",
  "FELIPE DOS SANTOS SILVA",
  "FELLIPE PARAGUASSU FREIRIA DE OLIVEIRA",
  "FERNANDO DINIZ DA SILVA SOUSA",
  "GABRIEL AUGUSTO VIDIGAL DE ANDRADE",
  "GABRIEL MOTA BRASCHE",
  "GABRIELA MONTEIRO ALEM",
  "GELSON BARROS DOS SANTOS JUNIOR",
  "GEOVANNA GABRIELLE SALES DE OLIVEIRA",
  "GRAZIELY SILVA DE ALMEIDA",
  "GUILHERME CESAR BENEVIDES",
  "GUILHERME LUCAS MOTA DE AGUIAR",
  "GUSTAVO CRAVEIRO LIMA",
  "GUSTAVO HENRIQUE SILVA ARAUJO",
  "GUSTAVO INÁCIO DE SOUZA",
  "HENRIQUE ARAUJO ANDRADE",
  "IAN MATHEUS CAVALCANTE DE MELO",
  "IURY CAIANO DINIZ",
  "JESSICA IANY TAVARES MONTEIRO DE MACEDO",
  "JOAO ARTHUR DE SOUSA LIMA",
  "JONATHAN SOUZA MACIEL",
  "JOSE ARTHUR SANTANA ECHECHURRY CRUZ",
  "JOSE AUGUSTO DOS SANTOS LOPES",
  "JOSÉ EDUARDO LEMOS SANTOS",
  "JULIANO DE ARAUJO MOTA MESQUITA",
  "KAUA FIGUEIREDO DE FARIAS",
  "KELVIN MATHEUS MACEDO DA CUNHA",
  "LARISSA CARVALHO LEITE DA SILVA",
  "LETHICIA LOHNNYE ROMEIRO AMORIM",
  "LOURANY PEREIRA MENEZES",
  "LUCAS EMANUEL OLIVEIRA PEREIRA",
  "LUCAS GABRIEL MORAIS DIAS",
  "LUIS FERNANDO CLEMENTE SILVA VIEIRA",
  "LUÍZ EDUARDO RODRIGUES DOS SANTOS",
  "LUIZ HENRIQUE NOGUEIRA RODRIGUES",
  "LUKAS OLIVEIRA CASTRO",
  "MAIANA BARBOSA FERREIRA",
  "MARCELO HORTA THOME JUNIOR",
  "MATHEUS BELO MARQUES",
  "MICAEL ALEXANDRE COSTA BARRETO",
  "MIGUEL RAMOS BRAGA",
  "ORLANDO ALVES DA SILVA NETO",
  "PAULO GABRIEL DE ARAUJO SALES",
  "PIETRA MARIA CHAVES DE OLIVEIRA",
  "RAMON REIS FERREIRA DE OLIVEIRA",
  "RHENZO MOSES REIS",
  "RICARDO ALEXANDRE RODRIGUES SANTA CRUZ FILHO",
  "RICARDO VIRGILIO MOREIRA DE SOUSA",
  "RIQUELVE DUARTE CARVALHO",
  "VALBERT BRENO GOMES FARIAS",
  "VICTOR DA SILVA COSTA",
  "WANDEILSON FERNANDES COSTA",
  "WHILLBERT BARROS LOBO",
  "YGOR TEIXEIRA DE ARAUJO"
];

const DOCENTES_BCC = [
  "CLENYA REJANE BARROS DE LIMA",
  "CAIO DE JESUS GREGORATTO",
  "BRUNO CÉSAR BARRETO DE FIGUEIREDO",
  "EDNALDO COELHO PEREIRA",
  "MARCELO SANTOS DA SILVA",
  "RICARDO ALEXANDRE RODRIGUES SANTA CRUZ"
];

const TECNICOS_TI = [
  "CARLOS ALBERTO MARQUES DE MORAIS (Analista de Sistemas)",
  "ENEAS MESQUITA CUNHA JUNIOR (Analista de Sistemas)",
  "GILMAR INÁCIO DA SILVA JÚNIOR (Técnico em Informática)",
  "KELLY SILVA DE AQUINO LACERDA (Técnico em Informática)",
  "MARIO MOREIRA PEREIRA (Técnico em Informática)",
  "PAMELLA THAYANNE DE FREITAS (Técnico em Informática)"
];

// 2. BAIRROS DE BOA VISTA E MUNICÍPIOS DE RORAIMA (GEOPOLÍTICA DA APURAÇÃO)
const ZONAS_RORAIMA = [
  {
    id: "canarinho",
    nome: "Canarinho (Sede UERR)",
    tipo: "boavista",
    tag: "Zona Central",
    coords: [2.8335, -60.6612],
    lore: "Sede da UERR na Rua Sete de Setembro. Onde as bancas de TCC acontecem e o ar-condicionado decide eleições.",
    clenyaVotes: 6,
    caioVotes: 5
  },
  {
    id: "pintolandia",
    nome: "Pintolândia",
    tipo: "boavista",
    tag: "Zona Oeste",
    coords: [2.8115, -60.7285],
    lore: "Maior colégio eleitoral da Zona Oeste! Boatos que prometeram zerar a fila do RU e liberar GPU pra rodar jogo.",
    clenyaVotes: 5,
    caioVotes: 6
  },
  {
    id: "paraviana",
    nome: "Paraviana",
    tipo: "boavista",
    tag: "Zona Leste",
    coords: [2.8380, -60.6480],
    lore: "Reduto dos debates acadêmicos sobre Engenharia de Software vs Computação Gráfica no Blender.",
    clenyaVotes: 5,
    caioVotes: 3
  },
  {
    id: "saopedro",
    nome: "São Pedro",
    tipo: "boavista",
    tag: "Reduto Sebrae",
    coords: [2.8255, -60.6585],
    lore: "Bairro citado no endereço profissional do Lattes do Prof. Caio (Av. Major Williams). Forte influência AgroTech!",
    clenyaVotes: 2,
    caioVotes: 5
  },
  {
    id: "mecejana",
    nome: "Mecejana",
    tipo: "boavista",
    tag: "Tradicional",
    coords: [2.8195, -60.6845],
    lore: "Eleitores exigem que o novo coordenador aprove TCC sem pedir formatação ABNT na véspera.",
    clenyaVotes: 4,
    caioVotes: 4
  },
  {
    id: "cacari",
    nome: "Caçari",
    tipo: "boavista",
    tag: "Zona Norte",
    coords: [2.8520, -60.6455],
    lore: "Votação auditada com IA, Machine Learning e Cientometria avançada na Orla Taumanan.",
    clenyaVotes: 4,
    caioVotes: 3
  },
  {
    id: "centro",
    nome: "Centro (Orla / Jaime Brasil)",
    tipo: "boavista",
    tag: "Centro Histórico",
    coords: [2.8197, -60.6714],
    lore: "Urna instalada perto da Praça do Centro Cívico. Votos transmitidos via rádio pacote e Google Talk.",
    clenyaVotes: 3,
    caioVotes: 4
  },
  {
    id: "buritis",
    nome: "Buritis",
    tipo: "boavista",
    tag: "Zona Oeste",
    coords: [2.8090, -60.7010],
    lore: "Forte presença de alunos que programam de madrugada à base de energético.",
    clenyaVotes: 3,
    caioVotes: 3
  },
  {
    id: "asa_branca",
    nome: "Asa Branca",
    tipo: "boavista",
    tag: "Zona Oeste",
    coords: [2.8142, -60.7095],
    lore: "Disputa voto a voto entre os defensores do Moodle EaD e a tropa do Linux Ubuntu.",
    clenyaVotes: 3,
    caioVotes: 2
  },
  {
    id: "aimore",
    nome: "Senador Hélio Campos / Equatorial",
    tipo: "boavista",
    tag: "Extremo Oeste",
    coords: [2.7965, -60.7420],
    lore: "As urnas daqui demoram 5 segundos a mais por causa do ping no servidor do SIGAA.",
    clenyaVotes: 2,
    caioVotes: 3
  },
  {
    id: "pacaraima",
    nome: "Polo Pacaraima (Fronteira)",
    tipo: "roraima",
    tag: "Norte RR",
    coords: [4.4795, -61.1477],
    lore: "Palco de múltiplos TCCs orientados pela Dra. Clenya em 2013 sobre UNIVIRR e Secretaria de Educação!",
    clenyaVotes: 3,
    caioVotes: 1
  },
  {
    id: "caracarai",
    nome: "Polo Caracaraí (Cidade Porto)",
    tipo: "roraima",
    tag: "Sul RR",
    coords: [1.8276, -61.1304],
    lore: "Banca histórica de TCC sobre jogos educativos em planilhas eletrônicas garante vantagem apertada.",
    clenyaVotes: 2,
    caioVotes: 2
  },
  {
    id: "rorainopolis",
    nome: "Polo Rorainópolis",
    tipo: "roraima",
    tag: "Sul RR",
    coords: [0.9395, -60.4389],
    lore: "O voto do Agronegócio + GPS Agropecuário do currículo do Prof. Caio pesa forte no Sul do Estado!",
    clenyaVotes: 1,
    caioVotes: 3
  }
];

// 3. FRASES DE VIRADA DRAMÁTICA E EVENTOS DE APURAÇÃO
const MOTIVOS_VIRADA_CLENYA = [
  "Recontagem de 54 atas de bancas de TCC no Canarinho deu +3 votos pra Dra. Clenya!",
  "Lote de votos via Moodle EaD do Paraviana e Pacaraima compilou sem erros de ABNT!",
  "Seção do Caçari validou certificado de 180h em Educação a Distância e virou o placar!",
  "Orientandos de TCC de 2025/2026 (Andrey Ponte e Caio Rodrigo) puxaram mutirão no Mecejana!",
  "Auditoria de Usabilidade no Portal da Transparência anulou 2 votos em branco e Clenya assumiu a ponta!"
];

const MOTIVOS_VIRADA_CAIO = [
  "Urna do Pintolândia rodou script em OpenGL + Blender 3D e virou o jogo pro Msc. Caio!",
  "Votos do bairro São Pedro chegaram via Google Talk (caiogrego@icomp.ufam.edu.br)!",
  "Curso de Digitação 60h do SENAC (2002) permitiu digitar 400 votos por minuto na reta final!",
  "Algoritmo de Detecção de Comportamento Anormal em Multidão virou a urna do Centro!",
  "Bancada do Agronegócio + Linux de Rorainópolis e Hélio Campos colocou Caio na liderança!"
];

const ACOES_SIMULADAS_ELEITORES = [
  "Votou com certificado ABNT atualizado",
  "Votou renderizando um Donut no Blender 3D",
  "Pediu revisão da nota de Engenharia de Software na urna",
  "Tentou dar git push --force na seção eleitoral",
  "Confirmou voto em menos de 1.2s (SENAC Digitação)",
  "Consultou o Moodle antes de apertar CONFIRMA",
  "Votou via SSH direto do laboratório da UERR",
  "Questionou se o voto conta como Hora Complementar"
];

// 4. ESTADO GLOBAL DA APLICAÇÃO
let todosEleitores = [];
let zonaSelecionadaId = "canarinho";
let modoVisualizacaoMapa = "boavista"; // 'boavista' ou 'roraima'
let leafletMap = null;
let leafletMarkers = {};
let liderAtual = "clenya"; // Começa com Clenya, depois vira Caio, depois Clenya...
let cicloAutomaticoSegundos = 9;
let contadorRegressivo = cicloAutomaticoSegundos;

// 5. INICIALIZAÇÃO DOS ELEITORES DO PDF
function inicializarEleitores() {
  todosEleitores = [];
  let idx = 1;

  // 73 Acadêmicos de Ciência da Computação
  ACADEMICOS_BCC.forEach((nome, i) => {
    const zona = ZONAS_RORAIMA[i % ZONAS_RORAIMA.length];
    const voto = (i % 2 === 0) ? "clenya" : "caio";
    const acao = nome.includes("WANDEILSON")
      ? "👑 Criador do Sistema TSE-UERR (Admin Root)"
      : ACOES_SIMULADAS_ELEITORES[i % ACOES_SIMULADAS_ELEITORES.length];
    todosEleitores.push({
      num: idx++,
      nome,
      categoria: "Acadêmico BCC",
      zonaId: zona.id,
      zonaNome: zona.nome,
      voto,
      acao
    });
  });

  // 6 Docentes
  DOCENTES_BCC.forEach((nome, i) => {
    const zona = ZONAS_RORAIMA[i % 6];
    let voto = (i % 2 === 0) ? "clenya" : "caio";
    if (nome.includes("CLENYA")) voto = "clenya";
    if (nome.includes("CAIO")) voto = "caio";
    todosEleitores.push({
      num: idx++,
      nome,
      categoria: "Docente Efetivo",
      zonaId: zona.id,
      zonaNome: zona.nome,
      voto,
      acao: nome.includes("CLENYA")
        ? "Candidata Chapa 10 (Já abriu 3 bancas hoje)"
        : nome.includes("CAIO")
        ? "Candidato Chapa 20 (Monitorando multidão com IA)"
        : "Voto docente peso 2x no colegiado"
    });
  });

  // 6 Técnicos / Analistas TI
  TECNICOS_TI.forEach((nome, i) => {
    const zona = ZONAS_RORAIMA[(i + 3) % ZONAS_RORAIMA.length];
    const voto = (i % 2 === 1) ? "clenya" : "caio";
    todosEleitores.push({
      num: idx++,
      nome,
      categoria: "Técnico TI",
      zonaId: zona.id,
      zonaNome: zona.nome,
      voto,
      acao: "Mantendo o servidor da urna online"
    });
  });

  sincronizarVotosZonasComEleitores();
  popularSelectIdentidadeChat();
}

function sincronizarVotosZonasComEleitores() {
  ZONAS_RORAIMA.forEach(z => {
    z.clenyaVotes = 0;
    z.caioVotes = 0;
  });
  todosEleitores.forEach(el => {
    const z = ZONAS_RORAIMA.find(item => item.id === el.zonaId);
    if (z) {
      if (el.voto === "clenya") z.clenyaVotes++;
      else z.caioVotes++;
    }
  });
}

// 6. CÁLCULO DO PLACAR GERAL E ATUALIZAÇÃO DO DOM
function atualizarPlacarGeral(motivoCustomizado = null) {
  let totalClenya = 0;
  let totalCaio = 0;
  let alunosClenya = 0, profsClenya = 0;
  let alunosCaio = 0, profsCaio = 0;

  todosEleitores.forEach(el => {
    if (el.voto === "clenya") {
      totalClenya++;
      if (el.categoria === "Acadêmico BCC") alunosClenya++;
      else profsClenya++;
    } else {
      totalCaio++;
      if (el.categoria === "Acadêmico BCC") alunosCaio++;
      else profsCaio++;
    }
  });

  const totalGeral = totalClenya + totalCaio;
  const pctClenya = ((totalClenya / totalGeral) * 100).toFixed(2);
  const pctCaio = ((totalCaio / totalGeral) * 100).toFixed(2);

  // Atualiza textos
  document.getElementById("pctClenya").textContent = pctClenya.replace(".", ",") + "%";
  document.getElementById("pctCaio").textContent = pctCaio.replace(".", ",") + "%";
  document.getElementById("votesClenya").textContent = totalClenya;
  document.getElementById("votesCaio").textContent = totalCaio;
  document.getElementById("rawClenya").textContent = `(${alunosClenya} alunos • ${profsClenya} serv/profs)`;
  document.getElementById("rawCaio").textContent = `(${alunosCaio} alunos • ${profsCaio} serv/profs)`;

  // Barra Cabo de Guerra
  document.getElementById("barClenya").style.width = `${pctClenya}%`;
  document.getElementById("barCaio").style.width = `${pctCaio}%`;
  document.getElementById("barLabelClenya").textContent = `${Number(pctClenya).toFixed(1)}%`;
  document.getElementById("barLabelCaio").textContent = `${Number(pctCaio).toFixed(1)}%`;

  // Diferença e Coroa de Líder
  const diff = Math.abs(totalClenya - totalCaio);
  document.getElementById("voteDiff").textContent = diff === 0 ? "EMPATE!" : `${diff} ${diff === 1 ? "VOTO" : "VOTOS"}`;

  const cardClenya = document.getElementById("cardClenya");
  const cardCaio = document.getElementById("cardCaio");
  const crownClenya = document.getElementById("crownClenya");
  const crownCaio = document.getElementById("crownCaio");

  if (totalClenya >= totalCaio) {
    liderAtual = "clenya";
    cardClenya.classList.add("leading-clenya");
    cardCaio.classList.remove("leading-caio");
    crownClenya.style.display = "block";
    crownCaio.style.display = "none";
  } else {
    liderAtual = "caio";
    cardCaio.classList.add("leading-caio");
    cardClenya.classList.remove("leading-clenya");
    crownCaio.style.display = "block";
    crownClenya.style.display = "none";
  }

  // Atualiza contadores da tabela
  document.getElementById("statTotalVoters").textContent = totalGeral;
  document.getElementById("statClenyaVoters").textContent = totalClenya;
  document.getElementById("statCaioVoters").textContent = totalCaio;

  // Atualiza porcentagem fictícia das urnas (98.70% a 99.99%)
  const fakeUrnaPct = (98.5 + Math.random() * 1.48).toFixed(2).replace(".", ",");
  document.getElementById("urnasPct").textContent = `${fakeUrnaPct}%`;

  // Banner de evento ao vivo
  const agora = new Date();
  const horaFmt = agora.toTimeString().split(" ")[0];
  document.getElementById("eventTime").textContent = horaFmt;

  if (motivoCustomizado) {
    document.getElementById("leadReason").textContent = motivoCustomizado;
    document.getElementById("eventMsg").innerHTML = `<strong>VIRADA NA APURAÇÃO:</strong> ${motivoCustomizado}`;
  }
}

// 7. MOTOR DE ALTERNÂNCIA (UMA VEZ UM GANHANDO, DEPOIS O OUTRO!)
function executarViradaDramatica(forcarLider = null) {
  // Se Clenya está ganhando, vira para Caio; se Caio está ganhando, vira para Clenya
  const novoLider = forcarLider || (liderAtual === "clenya" ? "caio" : "clenya");
  const perdedorDaRodada = novoLider === "clenya" ? "caio" : "clenya";

  // Escolhe de 2 a 5 eleitores do candidato que estava na frente e vira o voto deles em bairros chave
  const candidatosVirada = todosEleitores.filter(
    e => e.voto === perdedorDaRodada && !e.nome.includes("CLENYA") && !e.nome.includes("CAIO DE JESUS")
  );

  // Embaralha e vira alguns votos para garantir que o novoLider passe à frente por 1 a 4 votos
  const qtdVirar = Math.min(candidatosVirada.length, Math.floor(Math.random() * 3) + 3);
  for (let i = 0; i < qtdVirar; i++) {
    const idxSorteado = Math.floor(Math.random() * candidatosVirada.length);
    const eleitor = candidatosVirada.splice(idxSorteado, 1)[0];
    if (eleitor) {
      eleitor.voto = novoLider;
      eleitor.acao = novoLider === "clenya"
        ? "Virou voto após promessa de aprovação automática no TCC!"
        : "Virou voto após workshop de Blender 3D + Linux!";
    }
  }

  // Garante matematicamente que o novoLider ficou na frente
  let contagemNovo = todosEleitores.filter(e => e.voto === novoLider).length;
  let contagemOutro = todosEleitores.length - contagemNovo;
  if (contagemNovo <= contagemOutro) {
    const extras = todosEleitores.filter(
      e => e.voto === perdedorDaRodada && !e.nome.includes("CLENYA") && !e.nome.includes("CAIO DE JESUS")
    );
    const falta = (contagemOutro - contagemNovo) + 2;
    for (let j = 0; j < falta && j < extras.length; j++) {
      extras[j].voto = novoLider;
    }
  }

  sincronizarVotosZonasComEleitores();

  const listaMotivos = novoLider === "clenya" ? MOTIVOS_VIRADA_CLENYA : MOTIVOS_VIRADA_CAIO;
  const motivo = listaMotivos[Math.floor(Math.random() * listaMotivos.length)];

  atualizarPlacarGeral(motivo);
  renderizarCardsBairros();
  atualizarMarcadoresMapa();
  inspecionarZona(zonaSelecionadaId);
  renderizarTabelaEleitores();

  // Manda alerta automático no chat
  adicionarMensagemChat({
    autor: "🚨 TSE-UERR BOT",
    bairro: "Plantão Boa Vista",
    texto: `${novoLider === "clenya" ? "🟣 DRA. CLENYA PASSOU NA FRENTE!" : "🟢 MSC. CAIO ASSUMIU A LIDERANÇA!"} ${motivo}`,
    sistema: true
  });
}

// 8. MAPA INTERATIVO LEAFLET (BOA VISTA & RORAIMA)
function inicializarMapa() {
  leafletMap = L.map("roraimaMap", {
    center: [2.8255, -60.6750],
    zoom: 13,
    zoomControl: true
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap • TSE-UERR GeoComputing"
  }).addTo(leafletMap);

  atualizarMarcadoresMapa();
}

function atualizarMarcadoresMapa() {
  if (!leafletMap) return;

  // Remove marcadores antigos
  Object.values(leafletMarkers).forEach(m => leafletMap.removeLayer(m));
  leafletMarkers = {};

  ZONAS_RORAIMA.forEach(z => {
    const total = z.clenyaVotes + z.caioVotes;
    let cor = "#f59e0b"; // empate
    if (z.clenyaVotes > z.caioVotes) cor = "#a855f7";
    else if (z.caioVotes > z.clenyaVotes) cor = "#10b981";

    const circle = L.circleMarker(z.coords, {
      radius: Math.max(12, Math.min(24, total * 2.2)),
      fillColor: cor,
      color: "#ffffff",
      weight: z.id === zonaSelecionadaId ? 3 : 1.5,
      opacity: 1,
      fillOpacity: 0.82
    }).addTo(leafletMap);

    const liderZona = z.clenyaVotes > z.caioVotes
      ? "🟣 Dra. Clenya liderando"
      : z.caioVotes > z.clenyaVotes
      ? "🟢 Msc. Caio liderando"
      : "⚡ Empate técnico!";

    circle.bindTooltip(
      `<strong>${z.nome}</strong><br/>${liderZona} (${z.clenyaVotes} x ${z.caioVotes})`,
      { direction: "top" }
    );

    circle.on("click", () => {
      inspecionarZona(z.id);
    });

    leafletMarkers[z.id] = circle;
  });
}

function inspecionarZona(zonaId) {
  zonaSelecionadaId = zonaId;
  const z = ZONAS_RORAIMA.find(item => item.id === zonaId) || ZONAS_RORAIMA[0];

  const total = Math.max(1, z.clenyaVotes + z.caioVotes);
  const pctClenya = ((z.clenyaVotes / total) * 100).toFixed(1);
  const pctCaio = ((z.caioVotes / total) * 100).toFixed(1);

  document.getElementById("zoneTypeBadge").textContent =
    z.tipo === "boavista" ? `ZONA ELEITORAL • BAIRRO DE BOA VISTA (${z.tag})` : `POLO INTERIOR DE RORAIMA (${z.tag})`;
  document.getElementById("zoneTitle").textContent = z.nome;
  document.getElementById("zoneLore").textContent = z.lore;

  document.getElementById("zoneClenyaPct").textContent = `${pctClenya}% (${z.clenyaVotes} votos)`;
  document.getElementById("zoneCaioPct").textContent = `${pctCaio}% (${z.caioVotes} votos)`;
  document.getElementById("zoneClenyaBar").style.width = `${pctClenya}%`;
  document.getElementById("zoneCaioBar").style.width = `${pctCaio}%`;

  // Lista eleitores do PDF alocados nessa zona
  const eleitoresDaZona = todosEleitores.filter(e => e.zonaId === z.id);
  const ul = document.getElementById("zoneVoterList");
  ul.innerHTML = "";
  eleitoresDaZona.forEach(el => {
    const li = document.createElement("li");
    const badge = el.voto === "clenya" ? "🟣 Clenya (10)" : "🟢 Caio (20)";
    li.innerHTML = `<span>${el.nome}</span> <strong>${badge}</strong>`;
    ul.appendChild(li);
  });

  atualizarMarcadoresMapa();
}

function renderizarCardsBairros() {
  const grid = document.getElementById("bairrosGrid");
  grid.innerHTML = "";

  ZONAS_RORAIMA.forEach(z => {
    const total = Math.max(1, z.clenyaVotes + z.caioVotes);
    const pctClenya = ((z.clenyaVotes / total) * 100).toFixed(0);
    const pctCaio = 100 - pctClenya;
    const winnerClass = z.clenyaVotes >= z.caioVotes ? "winner-clenya" : "winner-caio";

    const card = document.createElement("div");
    card.className = `bairro-card ${winnerClass}`;
    card.innerHTML = `
      <div class="b-top">
        <span class="b-name">${z.nome}</span>
        <span class="b-tag">${z.tag}</span>
      </div>
      <div class="b-mini-bar">
        <div style="width:${pctClenya}%; background: var(--clenya-primary);"></div>
        <div style="width:${pctCaio}%; background: var(--caio-primary);"></div>
      </div>
      <div class="b-nums">
        <span style="color:#c084fc">🟣 Clenya: ${z.clenyaVotes} (${pctClenya}%)</span>
        <span style="color:#34d399">🟢 Caio: ${z.caioVotes} (${pctCaio}%)</span>
      </div>
    `;
    card.addEventListener("click", () => {
      inspecionarZona(z.id);
      if (leafletMap) {
        leafletMap.setView(z.coords, z.tipo === "boavista" ? 14 : 8, { animate: true });
      }
    });
    grid.appendChild(card);
  });
}

// 9. TABELA OFICIAL DE ELEITORES (FILTRO E BUSCA)
function renderizarTabelaEleitores() {
  const tbody = document.getElementById("votersTableBody");
  const termo = (document.getElementById("voterSearchInput").value || "").toLowerCase().trim();
  const catFiltro = document.getElementById("voterCategoryFilter").value;

  tbody.innerHTML = "";

  const filtrados = todosEleitores.filter(el => {
    const matchNome = el.nome.toLowerCase().includes(termo) || el.zonaNome.toLowerCase().includes(termo);
    const matchCat = catFiltro === "all" || el.categoria === catFiltro;
    return matchNome && matchCat;
  });

  filtrados.forEach(el => {
    const tr = document.createElement("tr");
    const pillClass = el.voto === "clenya" ? "pill-clenya" : "pill-caio";
    const pillText = el.voto === "clenya" ? "🟣 CHAPA 10 • DRA. CLENYA" : "🟢 CHAPA 20 • MSC. CAIO";

    tr.innerHTML = `
      <td><strong>#${el.num}</strong></td>
      <td><strong>${el.nome}</strong></td>
      <td>${el.categoria}</td>
      <td>📍 ${el.zonaNome}</td>
      <td><span class="vote-pill ${pillClass}">${pillText}</span></td>
      <td style="color: var(--text-muted); font-size: 0.76rem;">${el.acao}</td>
    `;
    tbody.appendChild(tr);
  });
}

// 10. CHAT EM TEMPO REAL (COM BOTS DOS ALUNOS DO PDF + PERSISTÊNCIA LOCAL)
const MENSAGENS_BOTS_ZOACAO = [
  { autor: "ADRIAN HARR RODRIGUES", bairro: "Canarinho", texto: "Rapaziada, quem ganhar vai cancelar a prova de Compiladores de amanhã???" },
  { autor: "ALEXANDRE YUKIO OYAMA DE SOUZA", bairro: "Paraviana", texto: "Acabei de ver o Lattes da Dra. Clenya, 54 bancas de TCC! Ela já reprovou até meu pensamento kkkkk" },
  { autor: "CAIO RODRIGO ALVES DE OLIVEIRA", bairro: "Pintolândia", texto: "Como orientando da Clenya no TCC de IA Generativa, declaro que meu voto é criptografado!" },
  { autor: "JOSE ARTHUR SANTANA ECHECHURRY CRUZ", bairro: "Caçari", texto: "Se o Prof. Caio ganhar, a matéria de Banco de Dados vai ser modelada no Blender 3D!" },
  { autor: "GELSON BARROS DOS SANTOS JUNIOR", bairro: "Mecejana", texto: "Alimentei minha LLM da UERR com os dois Lattes e a GPU pediu arrego 🔥" },
  { autor: "ANDREY PONTE EVANGELISTA DE SOUSA", bairro: "Centro", texto: "Pelas diretrizes WCAG de acessibilidade, essa apuração tá dando taquicardia em 100% do curso!" },
  { autor: "GABRIELA MONTEIRO ALEM", bairro: "São Pedro", texto: "Gente é verdade que o Caio ainda usa Google Talk em 2026?? Olhem a linha 32 do Lattes dele kkkkk" },
  { autor: "FELLIPE PARAGUASSU FREIRIA DE OLIVEIRA", bairro: "Buritis", texto: "No Pintolândia a boca de urna tá aceitando Pix ou nota extra no SIGAA!" },
  { autor: "PIETRA MARIA CHAVES DE OLIVEIRA", bairro: "Canarinho", texto: "Uma hora a Clenya ganha, 10 segundos depois o Caio vira... parece código com condição de corrida (Race Condition)!" },
  { autor: "RICARDO ALEXANDRE RODRIGUES SANTA CRUZ FILHO", bairro: "Paraviana", texto: "Eu e meu pai estamos na lista do PDF! Voto em família vale dobrado no colegiado?" },
  { autor: "WHILLBERT BARROS LOBO", bairro: "Asa Branca", texto: "Curso de Digitação 60h no SENAC em 2002 vs 24 cursos de Moodle na pandemia, os dois a 80km/h quem ganha?" },
  { autor: "LARISSA CARVALHO LEITE DA SILVA", bairro: "Polo Pacaraima", texto: "Aqui em Pacaraima os votos estão descendo a BR-174 de caminhonete!" }
];

function popularSelectIdentidadeChat() {
  const select = document.getElementById("chatIdentitySelect");
  ACADEMICOS_BCC.forEach(nome => {
    const opt = document.createElement("option");
    opt.value = nome;
    opt.textContent = `🎓 ${nome}`;
    select.appendChild(opt);
  });
}

function adicionarMensagemChat({ autor, bairro, texto, proprio = false, sistema = false }) {
  const box = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = `chat-msg ${proprio ? "user-own" : ""} ${sistema ? "system-alert" : ""}`;

  const hora = new Date().toTimeString().slice(0, 5);
  div.innerHTML = `
    <div class="msg-meta">
      <span class="msg-author">${autor}</span>
      <span class="msg-bairro">📍 ${bairro} • ${hora}</span>
    </div>
    <div class="msg-text">${texto}</div>
  `;

  box.appendChild(div);
  // Mantém no máximo 60 mensagens no DOM
  while (box.children.length > 60) {
    box.removeChild(box.firstChild);
  }
  box.scrollTop = box.scrollHeight;
}

function iniciarChatSimulado() {
  // Carrega 4 mensagens iniciais
  for (let i = 0; i < 4; i++) {
    const m = MENSAGENS_BOTS_ZOACAO[i];
    adicionarMensagemChat(m);
  }

  // Carrega mensagens salvas do usuário no localStorage
  try {
    const salvas = JSON.parse(localStorage.getItem("tse_uerr_chat_msgs") || "[]");
    salvas.forEach(m => adicionarMensagemChat({ ...m, proprio: true }));
  } catch (e) {
    // ignore storage errors
  }

  // A cada 5.5 segundos um aluno do PDF comenta algo no chat
  let cursorBot = 4;
  setInterval(() => {
    const msg = MENSAGENS_BOTS_ZOACAO[cursorBot % MENSAGENS_BOTS_ZOACAO.length];
    cursorBot++;
    adicionarMensagemChat(msg);

    // Oscila contador de usuários online
    const onlineEl = document.getElementById("onlineUsersCount");
    const base = 79 + Math.floor(Math.random() * 19) - 5;
    onlineEl.textContent = base;
  }, 5500);
}

// 11. SIMULADOR DE URNA ELETRÔNICA (MODAL)
let digitosUrna = "";

function abrirModalUrna() {
  digitosUrna = "";
  atualizarTelaUrna();
  document.getElementById("urnaModal").style.display = "flex";
}

function fecharModalUrna() {
  document.getElementById("urnaModal").style.display = "none";
}

function tocarBeepUrna(freq = 880, duracao = 0.08) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duracao);
  } catch (e) {
    // AudioContext bloqueado ou indisponível
  }
}

function atualizarTelaUrna() {
  document.getElementById("digit1").textContent = digitosUrna[0] || "";
  document.getElementById("digit2").textContent = digitosUrna[1] || "";

  const preview = document.getElementById("urnaPreview");
  const hint = document.getElementById("urnaHint");

  if (digitosUrna === "10") {
    preview.style.display = "flex";
    document.getElementById("urnaCandImg").src = "clenya.gif";
    document.getElementById("urnaCandName").textContent = "Dra. Clenya Rejane Barros de Lima";
    document.getElementById("urnaCandParty").textContent = "PES - Partido da Engenharia de Software & Moodle";
    document.getElementById("urnaCandSlogan").textContent = "54 Bancas de TCC e 100% de Normas ABNT!";
    hint.innerHTML = "✅ Número válido! Aperte <strong>CONFIRMA</strong> para virar a eleição pra Dra. Clenya!";
  } else if (digitosUrna === "20") {
    preview.style.display = "flex";
    document.getElementById("urnaCandImg").src = "caio.gif";
    document.getElementById("urnaCandName").textContent = "Msc. Caio de Jesus Gregoratto";
    document.getElementById("urnaCandParty").textContent = "P3D - Partido do Blender 3D, Visão Comp. & AgroTech";
    document.getElementById("urnaCandSlogan").textContent = "Digitação 60h SENAC + OpenGL no Linux!";
    hint.innerHTML = "✅ Número válido! Aperte <strong>CONFIRMA</strong> para virar a eleição pro Msc. Caio!";
  } else if (digitosUrna.length === 2) {
    preview.style.display = "none";
    hint.innerHTML = "⚠️ <strong>VOTO NULO DE COMPILAÇÃO (Syntax Error)</strong> — Use 10 (Clenya) ou 20 (Caio)!";
  } else {
    preview.style.display = "none";
    hint.innerHTML = "Digite <strong>10</strong> para Dra. Clenya ou <strong>20</strong> para Msc. Caio";
  }
}

// 12. EVENT LISTENERS E INICIALIZAÇÃO GERAL
document.addEventListener("DOMContentLoaded", () => {
  inicializarEleitores();
  atualizarPlacarGeral();
  inicializarMapa();
  renderizarCardsBairros();
  inspecionarZona("canarinho");
  renderizarTabelaEleitores();
  iniciarChatSimulado();

  // Timer regressivo para virada automática (uma vez um ganhando, depois o outro!)
  setInterval(() => {
    contadorRegressivo--;
    if (contadorRegressivo <= 0) {
      executarViradaDramatica();
      contadorRegressivo = cicloAutomaticoSegundos;
    }
    const fmt = contadorRegressivo < 10 ? `0${contadorRegressivo}s` : `${contadorRegressivo}s`;
    document.getElementById("nextBatchTimer").textContent = fmt;
  }, 1000);

  // Botão Forçar Virada
  document.getElementById("btnForceFlip").addEventListener("click", () => {
    executarViradaDramatica();
    contadorRegressivo = cicloAutomaticoSegundos;
  });

  // Abas do Mapa (Boa Vista vs Roraima)
  document.getElementById("tabBoaVista").addEventListener("click", (e) => {
    e.target.classList.add("active");
    document.getElementById("tabRoraima").classList.remove("active");
    modoVisualizacaoMapa = "boavista";
    if (leafletMap) leafletMap.setView([2.8255, -60.6750], 13, { animate: true });
  });

  document.getElementById("tabRoraima").addEventListener("click", (e) => {
    e.target.classList.add("active");
    document.getElementById("tabBoaVista").classList.remove("active");
    modoVisualizacaoMapa = "roraima";
    if (leafletMap) leafletMap.setView([2.65, -60.85], 7, { animate: true });
  });

  // Busca e filtro da tabela de eleitores do PDF
  document.getElementById("voterSearchInput").addEventListener("input", renderizarTabelaEleitores);
  document.getElementById("voterCategoryFilter").addEventListener("change", renderizarTabelaEleitores);

  // Envio de mensagem no chat
  document.getElementById("chatForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("chatInput");
    const autor = document.getElementById("chatIdentitySelect").value;
    const texto = input.value.trim();
    if (!texto) return;

    const novaMsg = {
      autor,
      bairro: "Boa Vista - RR",
      texto,
      proprio: true
    };
    adicionarMensagemChat(novaMsg);

    try {
      const salvas = JSON.parse(localStorage.getItem("tse_uerr_chat_msgs") || "[]");
      salvas.push({ autor, bairro: "Boa Vista - RR", texto });
      localStorage.setItem("tse_uerr_chat_msgs", JSON.stringify(salvas.slice(-15)));
    } catch (err) {
      // ignore
    }

    input.value = "";
  });

  // Botões de reação rápida do chat
  document.querySelectorAll(".react-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const autor = document.getElementById("chatIdentitySelect").value;
      const texto = btn.getAttribute("data-msg");
      adicionarMensagemChat({
        autor,
        bairro: "Boa Vista - RR",
        texto,
        proprio: true
      });
    });
  });

  // Controles da Urna Eletrônica
  document.getElementById("btnOpenUrna").addEventListener("click", abrirModalUrna);
  document.getElementById("btnCloseUrna").addEventListener("click", fecharModalUrna);

  document.querySelectorAll(".num-key").forEach(btn => {
    btn.addEventListener("click", () => {
      if (digitosUrna.length < 2) {
        digitosUrna += btn.getAttribute("data-num");
        tocarBeepUrna(720, 0.06);
        atualizarTelaUrna();
      }
    });
  });

  document.getElementById("keyCorrige").addEventListener("click", () => {
    digitosUrna = "";
    tocarBeepUrna(440, 0.08);
    atualizarTelaUrna();
  });

  document.getElementById("keyBranco").addEventListener("click", () => {
    digitosUrna = "10"; // Em sátira, voto em branco compila automaticamente pra quem estiver atrás!
    tocarBeepUrna(600, 0.08);
    atualizarTelaUrna();
  });

  document.getElementById("keyConfirma").addEventListener("click", () => {
    if (digitosUrna === "10" || digitosUrna === "20") {
      // Som clássico "PIRILILIM" da urna
      tocarBeepUrna(1046, 0.35);
      const escolhido = digitosUrna === "10" ? "clenya" : "caio";
      executarViradaDramatica(escolhido);
      contadorRegressivo = cicloAutomaticoSegundos;

      const autor = document.getElementById("chatIdentitySelect").value;
      adicionarMensagemChat({
        autor: `🗳️ URNA (${autor})`,
        bairro: "Seção Especial UERR",
        texto: `Acabou de votar na Chapa ${digitosUrna} e provocou uma virada na apuração!`,
        sistema: true
      });
      fecharModalUrna();
    } else {
      tocarBeepUrna(300, 0.15);
    }
  });
});
