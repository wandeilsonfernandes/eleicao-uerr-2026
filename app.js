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

// 2.5. DADOS OFICIAIS DO RELATÓRIO DAS ELEIÇÕES UERR (26/11/2026 às 11:43:23 - Págs. 1 a 6)
const RELATORIO_OFICIAL_BCC = {
  dataGeracao: "26/11/2026 11:43:23",
  urlOficial: "https://eleicoes.uerr.edu.br/coordenador2026/relatorio",
  clenya: {
    colocacao: 1,
    docente: 3,      // 3/5 * 70% = 42,00%
    tecnico: 4,      // 4/4 * 20% = 20,00%
    discente: 32,    // 32/37 * 10% = 8,6486% -> 8,65%
    totalNominal: 39,
    pontuacao: 70.65
  },
  caio: {
    colocacao: 2,
    docente: 2,      // 2/5 * 70% = 28,00%
    tecnico: 0,      // 0/4 * 20% = 0,00%
    discente: 5,     // 5/37 * 10% = 1,3513% -> 1,35%
    totalNominal: 7,
    pontuacao: 29.35
  },
  branco: { docente: 0, tecnico: 0, discente: 0 },
  nulo: { docente: 0, tecnico: 0, discente: 1 },
  abstencoes: { docente: 1, tecnico: 2, discente: 35, total: 38 }
};

const RELATORIO_TODOS_CURSOS_UERR = [
  { curso: "Ciência da Computação", colocacao: "1º 🏆", candidato: "CLENYA REJANE BARROS DE LIMA", doc: 3, tec: 4, disc: 32, brancosNulos: "0 Brancos • 1 Nulo (Disc.)", pct: "70,65%", destaque: "win-bcc" },
  { curso: "Ciência da Computação", colocacao: "2º 🥈", candidato: "CAIO DE JESUS GREGORATTO", doc: 2, tec: 0, disc: 5, brancosNulos: "Único curso com 2 candidatos!", pct: "29,35%", destaque: "sec-bcc" },
  { curso: "Administração", colocacao: "1º", candidato: "JACQUELAINE ALVES MACHADO", doc: 4, tec: 4, disc: 6, brancosNulos: "3 Brancos (Disc.) • 2 Nulos (Disc.)", pct: "100,00%" },
  { curso: "Ciências Biológicas", colocacao: "1º", candidato: "ALEXANDRE CURCINO", doc: 8, tec: 1, disc: 5, brancosNulos: "0 Brancos • 0 Nulos", pct: "100,00%" },
  { curso: "Ciências Contábeis", colocacao: "1º", candidato: "ITAJAY MARIA SOARES", doc: 8, tec: 5, disc: 42, brancosNulos: "0 Brancos • 1 Nulo (Disc.)", pct: "100,00%" },
  { curso: "Direito", colocacao: "1º", candidato: "FERNANDO CESAR COSTA XAVIER", doc: 8, tec: 1, disc: 18, brancosNulos: "0 Brancos • 0 Nulos", pct: "100,00%" },
  { curso: "Educação Física", colocacao: "1º", candidato: "ANDRÉ DE ARAÚJO PINTO", doc: 4, tec: 1, disc: 17, brancosNulos: "0 Brancos • 1 Nulo (Disc.)", pct: "100,00%" },
  { curso: "Enfermagem", colocacao: "1º", candidato: "FRANCISCO RAILSON BISPO DE BARROS", doc: 7, tec: 1, disc: 7, brancosNulos: "1 Branco (Disc.) • 0 Nulos", pct: "100,00%" },
  { curso: "Filosofia", colocacao: "1º", candidato: "FRANCISCO RAFAEL LEIDENS", doc: 6, tec: 0, disc: 4, brancosNulos: "1 Branco (Disc.) • 0 Nulos (0 Téc.)", pct: "80,00%" },
  { curso: "Física", colocacao: "1º", candidato: "SALOME FONTAO CUNHA", doc: 3, tec: 0, disc: 5, brancosNulos: "0 Brancos • 0 Nulos (0 Téc.)", pct: "80,00%" },
  { curso: "Geografia", colocacao: "1º", candidato: "ELIONETE DE CASTRO GARZONI", doc: 6, tec: 0, disc: 17, brancosNulos: "1 Branco (Disc.) • 0 Nulos (0 Téc.)", pct: "80,00%" },
  { curso: "Letras", colocacao: "1º", candidato: "CORA ELENA GONZALO ZAMBRANO", doc: 11, tec: 0, disc: 1, brancosNulos: "0 Brancos • 1 Nulo (Docente!)", pct: "80,00%" },
  { curso: "Matemática", colocacao: "1º", candidato: "JERRIMAR MORAES DE ARAUJO", doc: 6, tec: 0, disc: 6, brancosNulos: "0 Brancos • 0 Nulos (0 Téc.)", pct: "80,00%" },
  { curso: "Medicina", colocacao: "1º", candidato: "RENATO DA SILVA GALVÃO", doc: 9, tec: 1, disc: 28, brancosNulos: "0 Brancos • 1 Nulo (Disc.)", pct: "100,00%" },
  { curso: "História", colocacao: "1º", candidato: "MARIA JOSE DOS SANTOS", doc: 4, tec: 2, disc: 13, brancosNulos: "0 Brancos • 0 Nulos", pct: "100,00%" },
  { curso: "Pedagogia", colocacao: "1º", candidato: "OSVALDO PIEDADE PEREIRA DA SILVA", doc: 6, tec: 1, disc: 12, brancosNulos: "0 Brancos • 0 Nulos", pct: "100,00%" },
  { curso: "Química", colocacao: "1º", candidato: "REGIA CHACON PESSOA DE LIMA", doc: 5, tec: 1, disc: 14, brancosNulos: "0 Brancos • 0 Nulos", pct: "100,00%" },
  { curso: "Serviço Social", colocacao: "1º", candidato: "RITA DE CASSIA BARBOSA DOS SANTOS", doc: 4, tec: 0, disc: 11, brancosNulos: "0 Brancos • 0 Nulos (0 Téc.)", pct: "80,00%" },
  { curso: "Turismo", colocacao: "1º", candidato: "ROSIJANE EVANGELISTA DA SILVA", doc: 3, tec: 0, disc: 0, brancosNulos: "0 Alunos e 0 Técnicos votaram!", pct: "70,00%" },
  { curso: "Ciências Agrárias", colocacao: "—", candidato: "SEM CANDIDATO INSCRITO (FANTASMA 👻)", doc: 0, tec: 0, disc: 0, brancosNulos: "0 Brancos • 0 Nulos (0 Votos!)", pct: "—", destaque: "zero-agrarias" },
  { curso: "Ciências Sociais", colocacao: "1º", candidato: "WANDERLEY GURGEL DE ALMEIDA", doc: 2, tec: 0, disc: 9, brancosNulos: "0 Brancos • 0 Nulos (0 Téc.)", pct: "80,00%" }
];

// 3. FRASES DE VIRADA DRAMÁTICA E EVENTOS DE APURAÇÃO
const MOTIVOS_VIRADA_CLENYA = [
  "RELATÓRIO OFICIAL (26/11 às 11:43:23): Dra. Clenya vence com 70,65% (3 Docentes = 42%, 4 Técnicos = 20%, 32 Discentes = 8,65%)!",
  "Capote Técnico Oficial: 4 a 0 nos Técnicos Administrativos garantiu 20% inteirinhos de vantagem pra Dra. Clenya no PDF!",
  "Lavada nos Discentes: dos 37 votos válidos de alunos, 32 foram na Dra. Clenya (86,49%) contra 5 no Msc. Caio + 1 Nulo!",
  "Placar Docente Oficial (3 x 2): 3 professores votaram na Dra. Clenya (42,00%) contra 2 no Msc. Caio (28,00%)!",
  "54 atas de bancas de TCC + 39 votos válidos confirmados no Relatório das Eleições UERR 2026!"
];

const MOTIVOS_VIRADA_CAIO = [
  "REALIDADE ALTERNATIVA ATIVADA: Os 35 alunos de Computação que faltaram acordaram às 11:44 e votaram todos no Msc. Caio!",
  "Recontagem Paralela no Blender 3D: Se o 1 aluno que votou NULO tivesse compilado um shader em OpenGL, virava pro Caio!",
  "E se o 6º Professor tivesse votado e virado um docente? Nos professores foi quase empate: 3 a 2 no relatório oficial!",
  "Valbert Breno achou uma urna extra no São Pedro + Nordeste via Google Talk que converte votos de Agronegócios pra Computação!",
  "Simulação Modo Zoeira: Digitação 60h do SENAC (2002) inverteu os ponteiros do relatório PDF em C!"
];

const ACOES_SIMULADAS_ELEITORES = [
  "Confirmado entre os 32 votos discentes válidos na Dra. Clenya (Relatório 26/11)",
  "Votou com certificado ABNT atualizado (1 dos 32 alunos da Dra. Clenya)",
  "Consultou as 54 bancas de TCC no Lattes e confirmou Dra. Clenya",
  "Compilou o voto no CAFe dentro do peso de 8,65% discente para Dra. Clenya",
  "Garantiu presença entre os 38 alunos que não esqueceram a senha do CAFe"
];

// 4. ESTADO GLOBAL DA APLICAÇÃO
let todosEleitores = [];
let zonaSelecionadaId = "canarinho";
let modoVisualizacaoMapa = "boavista"; // 'boavista' ou 'roraima'
let leafletMap = null;
let leafletMarkers = {};
let liderAtual = "clenya";
let modoOficialAtivo = true; // Começa com os dados 100% reais do PDF (70,65% x 29,35%)!
let loopSimulacaoAtivo = false; // O usuário pode ligar se quiser ver as viradas automáticas
let cicloAutomaticoSegundos = 9;
let contadorRegressivo = cicloAutomaticoSegundos;

// 5. INICIALIZAÇÃO DOS ELEITORES COM OS NÚMEROS EXATOS DO RELATÓRIO OFICIAL (26/11/2026)
function inicializarEleitores() {
  carregarDistribuicaoOficial();
  popularSelectIdentidadeChat();
  renderizarTabelaTodosCursos();
}

function carregarDistribuicaoOficial() {
  todosEleitores = [];
  let idx = 1;
  modoOficialAtivo = true;

  // No PDF Oficial de Ciência da Computação (26/11/2026 11:43:23):
  // Discentes (73 aptos no SEI): 32 votaram Clenya, 5 votaram Caio, 1 votou Nulo, 35 NÃO VOTARAM (Abstenção)
  // Docentes (6 na lista do curso): 3 votaram Clenya, 2 votaram Caio, 1 NÃO VOTOU (Abstenção)
  // Técnicos (6 na lista TI): 4 votaram Clenya, 0 votaram Caio, 2 NÃO VOTARAM (Abstenção)

  // Índices escolhidos para os 5 votos discentes do Caio, 1 voto nulo e 32 votos da Clenya (incluindo Wandeilson e Valbert presentes!)
  const indicesCaioDiscentes = new Set([3, 18, 31, 47, 61]); // 5 alunos fiéis do Blender 3D / Linux
  const indiceNuloDiscente = 44; // 1 aluno misterioso que votou NULO

  let contClenyaDisc = 0;

  ACADEMICOS_BCC.forEach((nome, i) => {
    const zona = ZONAS_RORAIMA[i % ZONAS_RORAIMA.length];
    let voto = "abstencao";
    let acao = "😴 Faz parte dos 35 alunos que esqueceram de votar (Abstenção no Relatório 26/11)";

    if (indicesCaioDiscentes.has(i)) {
      voto = "caio";
      acao = "🟢 Um dos 5 heróis discentes que votaram no Msc. Caio (1,35% no PDF Oficial!)";
    } else if (i === indiceNuloDiscente) {
      voto = "nulo";
      acao = "🕵️‍♂️ O LENDÁRIO 1 VOTO NULO DISCENTE registrado no Relatório Oficial de 26/11!";
    } else if (nome.includes("WANDEILSON") || nome.includes("VALBERT BRENO") || contClenyaDisc < 30) {
      // Garante exatos 32 discentes na Dra. Clenya (30 + Wandeilson + Valbert = 32!)
      if (nome.includes("WANDEILSON")) {
        voto = "clenya";
        acao = "👑 Criador do Site • Voto contabilizado no Relatório Oficial de 26/11!";
      } else if (nome.includes("VALBERT BRENO")) {
        voto = "clenya";
        acao = "📊 Auditor Oficial da Turma • Contabilizou os 70,65% x 29,35% do PDF!";
      } else {
        voto = "clenya";
        contClenyaDisc++;
        acao = ACOES_SIMULADAS_ELEITORES[i % ACOES_SIMULADAS_ELEITORES.length];
      }
    }

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

  // Ajuste fino caso Wandeilson ou Valbert já tenham entrado antes dos 30 primeiros: garante exatos 32 Clenya, 5 Caio, 1 Nulo, 35 Abstenções
  let atuaisClenya = todosEleitores.filter(e => e.categoria === "Acadêmico BCC" && e.voto === "clenya");
  while (atuaisClenya.length < 32) {
    const abst = todosEleitores.find(e => e.categoria === "Acadêmico BCC" && e.voto === "abstencao");
    if (abst) {
      abst.voto = "clenya";
      abst.acao = "Confirmado entre os 32 votos discentes válidos na Dra. Clenya (Relatório 26/11)";
    }
    atuaisClenya = todosEleitores.filter(e => e.categoria === "Acadêmico BCC" && e.voto === "clenya");
  }
  while (atuaisClenya.length > 32) {
    const ultimo = atuaisClenya[atuaisClenya.length - 1];
    if (!ultimo.nome.includes("WANDEILSON") && !ultimo.nome.includes("VALBERT")) {
      ultimo.voto = "abstencao";
      ultimo.acao = "😴 Faz parte dos 35 alunos que esqueceram de votar (Abstenção no Relatório 26/11)";
    }
    atuaisClenya = todosEleitores.filter(e => e.categoria === "Acadêmico BCC" && e.voto === "clenya");
  }

  // 6 Docentes -> Oficial: 3 Clenya, 2 Caio, 1 Abstenção
  DOCENTES_BCC.forEach((nome, i) => {
    const zona = ZONAS_RORAIMA[i % 6];
    let voto = "clenya";
    let acao = "👨‍🏫 Voto Docente Oficial (Peso 70%: 3 a 2 pra Dra. Clenya no PDF)";
    if (nome.includes("CLENYA")) {
      voto = "clenya";
      acao = "🏆 Candidata Eleita (70,65% no Relatório Oficial de 26/11/2026!)";
    } else if (nome.includes("CAIO")) {
      voto = "caio";
      acao = "🥈 Candidato 2º Colocado (29,35% no Relatório Oficial de 26/11/2026)";
    } else if (i === 2 || i === 3) {
      voto = "clenya"; // Total 3 docentes Clenya (Clenya + 2)
    } else if (i === 4) {
      voto = "caio";   // Total 2 docentes Caio (Caio + 1)
      acao = "👨‍🏫 Voto Docente Oficial no Msc. Caio (garantiu 28,00% na ponderação docente!)";
    } else {
      voto = "abstencao"; // 6º docente não votou (apenas 5 votos docentes registrados no PDF)
      acao = "😴 Ausente na urna docente (apenas 5 docentes votaram no Relatório Oficial)";
    }

    todosEleitores.push({
      num: idx++,
      nome,
      categoria: "Docente Efetivo",
      zonaId: zona.id,
      zonaNome: zona.nome,
      voto,
      acao
    });
  });

  // 6 Técnicos -> Oficial: 4 Clenya, 0 Caio, 2 Abstenções
  TECNICOS_TI.forEach((nome, i) => {
    const zona = ZONAS_RORAIMA[(i + 2) % ZONAS_RORAIMA.length];
    const votouClenya = i < 4;
    todosEleitores.push({
      num: idx++,
      nome,
      categoria: "Técnico TI",
      zonaId: zona.id,
      zonaNome: zona.nome,
      voto: votouClenya ? "clenya" : "abstencao",
      acao: votouClenya
        ? "🛠️ Unanimidade Técnica (4 a 0 pra Dra. Clenya = 20,00% cravados no PDF Oficial!)"
        : "😴 Não votou na urna de BCC (4 técnicos votaram no Relatório Oficial)"
    });
  });

  sincronizarVotosZonasComEleitores();
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
      else if (el.voto === "caio") z.caioVotes++;
    }
  });
}

// 6. CÁLCULO DO PLACAR GERAL (COM FÓRMULA OFICIAL 70/20/10 DO EDITAL) E ATUALIZAÇÃO DO DOM
function atualizarPlacarGeral(motivoCustomizado = null) {
  let discClenya = 0, docClenya = 0, tecClenya = 0;
  let discCaio = 0, docCaio = 0, tecCaio = 0;
  let totalNulos = 0, totalAbstencoes = 0;

  todosEleitores.forEach(el => {
    if (el.voto === "clenya") {
      if (el.categoria === "Acadêmico BCC") discClenya++;
      else if (el.categoria === "Docente Efetivo") docClenya++;
      else tecClenya++;
    } else if (el.voto === "caio") {
      if (el.categoria === "Acadêmico BCC") discCaio++;
      else if (el.categoria === "Docente Efetivo") docCaio++;
      else tecCaio++;
    } else if (el.voto === "nulo") {
      totalNulos++;
    } else {
      totalAbstencoes++;
    }
  });

  const totalClenya = discClenya + docClenya + tecClenya;
  const totalCaio = discCaio + docCaio + tecCaio;

  // Cálculo oficial ponderado (Item 3.5.1 do Edital: 70% Docentes + 20% Técnicos + 10% Discentes sobre votos válidos de cada categoria)
  const validDoc = Math.max(1, docClenya + docCaio);
  const validTec = Math.max(1, tecClenya + tecCaio);
  const validDisc = Math.max(1, discClenya + discCaio);

  const pondClenya = ((docClenya / validDoc) * 70) + ((tecClenya / validTec) * 20) + ((discClenya / validDisc) * 10);
  const pondCaio = ((docCaio / validDoc) * 70) + ((tecCaio / validTec) * 20) + ((discCaio / validDisc) * 10);

  const pctClenya = pondClenya.toFixed(2);
  const pctCaio = pondCaio.toFixed(2);

  // Atualiza textos
  document.getElementById("pctClenya").textContent = pctClenya.replace(".", ",") + "%";
  document.getElementById("pctCaio").textContent = pctCaio.replace(".", ",") + "%";
  document.getElementById("votesClenya").textContent = totalClenya;
  document.getElementById("votesCaio").textContent = totalCaio;
  document.getElementById("rawClenya").textContent = `(${discClenya} discentes • ${docClenya} docentes • ${tecClenya} técnicos)`;
  document.getElementById("rawCaio").textContent = `(${discCaio} discentes • ${docCaio} docentes • ${tecCaio} técnicos)`;

  // Barra Cabo de Guerra
  document.getElementById("barClenya").style.width = `${pctClenya}%`;
  document.getElementById("barCaio").style.width = `${pctCaio}%`;
  document.getElementById("barLabelClenya").textContent = `${pctClenya.replace(".", ",")}%`;
  document.getElementById("barLabelCaio").textContent = `${pctCaio.replace(".", ",")}%`;

  // Diferença e Coroa de Líder
  const diffNominal = Math.abs(totalClenya - totalCaio);
  const diffPct = Math.abs(pondClenya - pondCaio).toFixed(2).replace(".", ",");
  document.getElementById("voteDiff").textContent =
    diffNominal === 0 && diffPct === "0,00"
      ? "EMPATE!"
      : `+${diffPct}% (${diffNominal} VOTOS)`;

  const cardClenya = document.getElementById("cardClenya");
  const cardCaio = document.getElementById("cardCaio");
  const crownClenya = document.getElementById("crownClenya");
  const crownCaio = document.getElementById("crownCaio");

  if (pondClenya >= pondCaio) {
    liderAtual = "clenya";
    cardClenya.classList.add("leading-clenya");
    cardCaio.classList.remove("leading-caio");
    crownClenya.style.display = "block";
    crownClenya.textContent = modoOficialAtivo
      ? "👑 ELEITA OFICIALMENTE (1º LUGAR • 70,65% NO PDF!)"
      : "👑 NA FRENTE (SIMULAÇÃO DE RECONTAGEM)";
    crownCaio.style.display = "none";
  } else {
    liderAtual = "caio";
    cardCaio.classList.add("leading-caio");
    cardClenya.classList.remove("leading-clenya");
    crownCaio.style.display = "block";
    crownClenya.style.display = "none";
  }

  // Atualiza contadores da tabela
  document.getElementById("statTotalVoters").textContent = todosEleitores.length;
  document.getElementById("statClenyaVoters").textContent = totalClenya;
  document.getElementById("statCaioVoters").textContent = totalCaio;
  const nullEl = document.getElementById("statNullVoters");
  if (nullEl) nullEl.textContent = `${totalNulos} Aluno${totalNulos !== 1 ? "s" : ""}`;
  const abstEl = document.getElementById("statAbstVoters");
  if (abstEl) abstEl.textContent = `${totalAbstencoes}`;

  // Atualiza porcentagem das urnas
  document.getElementById("urnasPct").textContent = modoOficialAtivo
    ? "100,00% OFICIAL"
    : "99,99% (RECONTAGEM PARALELA)";

  // Banner de evento ao vivo
  const agora = new Date();
  const horaFmt = modoOficialAtivo ? "11:43:23" : agora.toTimeString().split(" ")[0];
  document.getElementById("eventTime").textContent = horaFmt;

  if (motivoCustomizado) {
    document.getElementById("leadReason").textContent = motivoCustomizado;
    document.getElementById("eventMsg").innerHTML = `<strong>${modoOficialAtivo ? "RELATÓRIO OFICIAL UERR (26/11):" : "SIMULAÇÃO DE RECONTAGEM:"}</strong> ${motivoCustomizado}`;
  }
}

// 7. MOTOR DE ALTERNÂNCIA E RESTAURAÇÃO DO RESULTADO OFICIAL
function restaurarDadosOficiais() {
  carregarDistribuicaoOficial();
  modoOficialAtivo = true;
  loopSimulacaoAtivo = false;
  const btnLoop = document.getElementById("btnToggleSimLoop");
  if (btnLoop) {
    btnLoop.textContent = "🔒 OFICIAL TRAVADO (LIGAR ZOEIRA 🔄)";
    btnLoop.classList.remove("sim-active");
  }
  const subDetail = document.getElementById("modeSubDetail");
  if (subDetail) {
    subDetail.textContent = "(Exibindo os dados reais do Relatório Oficial da UERR — 70,65% x 29,35%)";
  }

  atualizarPlacarGeral("Relatório Oficial 26/11/2026 às 11:43:23 restaurado: Dra. Clenya 70,65% (3 Doc, 4 Téc, 32 Disc) x Msc. Caio 29,35% (2 Doc, 0 Téc, 5 Disc) + 1 Nulo!");
  renderizarCardsBairros();
  atualizarMarcadoresMapa();
  inspecionarZona(zonaSelecionadaId);
  renderizarTabelaEleitores();

  adicionarMensagemChat({
    autor: "🏛️ COMISSÃO ELEITORAL UERR",
    bairro: "Relatório Oficial 26/11",
    texto: "✅ DADOS OFICIAIS RESTAURADOS: Dra. Clenya Rejane Barros de Lima ELEITA com 70,65% (3 Docentes, 4 Técnicos, 32 Discentes) contra 29,35% do Msc. Caio Gregoratto (2 Docentes, 0 Técnicos, 5 Discentes) e 1 Voto Nulo Discente!",
    sistema: true
  });
}

function executarViradaDramatica(forcarLider = null) {
  modoOficialAtivo = false;
  const subDetail = document.getElementById("modeSubDetail");
  if (subDetail) {
    subDetail.textContent = "(Modo Simulação/Recontagem Paralela ativo! Clique em '📄 DADOS OFICIAIS (70,65%)' no topo para voltar ao PDF real)";
  }

  // Se pediu Clenya especificamente e quer ver os dados oficiais de vitória dela:
  const novoLider = forcarLider || (liderAtual === "clenya" ? "caio" : "clenya");

  if (novoLider === "caio") {
    // Em uma realidade paralela onde os 35 alunos ausentes acordaram e os docentes/técnicos viraram pro Caio!
    todosEleitores.forEach((el, idx) => {
      if (el.nome.includes("CLENYA")) {
        el.voto = "clenya";
      } else if (el.nome.includes("CAIO DE JESUS")) {
        el.voto = "caio";
      } else if (el.categoria === "Docente Efetivo") {
        el.voto = idx % 2 === 0 ? "caio" : "clenya"; // 3 a 2 pro Caio nos docentes
        el.acao = "🔄 Recontagem Paralela: Virou voto docente para o Msc. Caio (Blender 3D)!";
      } else if (el.categoria === "Técnico TI") {
        el.voto = idx < 3 ? "caio" : "clenya";
        el.acao = "🔄 Recontagem Paralela: Servidor Linux compilou voto técnico pro Msc. Caio!";
      } else {
        // Os 35 alunos que tinham faltado acordaram e votaram no Caio!
        if (el.voto === "abstencao" || el.voto === "nulo" || idx % 3 === 0) {
          el.voto = "caio";
          el.acao = "⚡ Acordou às 11:44 após o PDF oficial e votou no Msc. Caio na recontagem paralela!";
        }
      }
    });
  } else {
    // Volta para a vitória oficial esmagadora da Dra. Clenya (70,65%)
    carregarDistribuicaoOficial();
  }

  sincronizarVotosZonasComEleitores();

  const listaMotivos = novoLider === "clenya" ? MOTIVOS_VIRADA_CLENYA : MOTIVOS_VIRADA_CAIO;
  const motivo = listaMotivos[Math.floor(Math.random() * listaMotivos.length)];

  atualizarPlacarGeral(motivo);
  renderizarCardsBairros();
  atualizarMarcadoresMapa();
  inspecionarZona(zonaSelecionadaId);
  renderizarTabelaEleitores();

  adicionarMensagemChat({
    autor: "🚨 TSE-UERR BOT",
    bairro: "Plantão Boa Vista",
    texto: `${novoLider === "clenya" ? "🟣 VITÓRIA OFICIAL DRA. CLENYA (70,65%)!" : "🟢 REALIDADE ALTERNATIVA: MSC. CAIO VIROU!"} ${motivo}`,
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
    let badge = "😴 Ausente";
    if (el.voto === "clenya") badge = "🟣 Clenya (1º)";
    else if (el.voto === "caio") badge = "🟢 Caio (2º)";
    else if (el.voto === "nulo") badge = "⚠️ NULO (1)";
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

// 9. TABELA OFICIAL DE ELEITORES (FILTRO E BUSCA) + TABELA DOS 18 CURSOS DA UERR
function renderizarTabelaEleitores() {
  const tbody = document.getElementById("votersTableBody");
  const termo = (document.getElementById("voterSearchInput").value || "").toLowerCase().trim();
  const catFiltro = document.getElementById("voterCategoryFilter").value;

  tbody.innerHTML = "";

  const filtrados = todosEleitores.filter(el => {
    const statusStr = el.voto === "clenya" ? "clenya" : el.voto === "caio" ? "caio" : el.voto === "nulo" ? "nulo" : "abstenção ausente";
    const matchNome =
      el.nome.toLowerCase().includes(termo) ||
      el.zonaNome.toLowerCase().includes(termo) ||
      statusStr.includes(termo);
    const matchCat = catFiltro === "all" || el.categoria === catFiltro;
    return matchNome && matchCat;
  });

  filtrados.forEach(el => {
    const tr = document.createElement("tr");
    let pillClass = "pill-abst";
    let pillText = "😴 ABSTENÇÃO (NÃO VOTOU)";
    if (el.voto === "clenya") {
      pillClass = "pill-clenya";
      pillText = "🟣 VOTO VÁLIDO • DRA. CLENYA (70,65%)";
    } else if (el.voto === "caio") {
      pillClass = "pill-caio";
      pillText = "🟢 VOTO VÁLIDO • MSC. CAIO (29,35%)";
    } else if (el.voto === "nulo") {
      pillClass = "pill-null";
      pillText = "⚠️ VOTO NULO DISCENTE (1 NO PDF!)";
    }

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

function renderizarTabelaTodosCursos() {
  const tbody = document.getElementById("allCoursesTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  RELATORIO_TODOS_CURSOS_UERR.forEach(item => {
    const tr = document.createElement("tr");
    if (item.destaque === "win-bcc") tr.className = "row-winner-official";
    else if (item.destaque === "sec-bcc") tr.className = "row-second-official";
    else if (item.destaque === "zero-agrarias") tr.className = "row-null-official";

    tr.innerHTML = `
      <td><strong>${item.curso}</strong></td>
      <td><strong>${item.colocacao}</strong> — ${item.candidato}</td>
      <td><strong>${item.doc}</strong></td>
      <td><strong>${item.tec}</strong></td>
      <td><strong>${item.disc}</strong></td>
      <td style="font-size:0.75rem; color: var(--text-muted);">${item.brancosNulos}</td>
      <td><strong style="color: ${item.destaque === 'win-bcc' ? '#d8b4fe' : item.destaque === 'sec-bcc' ? '#6ee7b7' : '#fde047'}; font-family: var(--font-mono);">${item.pct}</strong></td>
    `;
    tbody.appendChild(tr);
  });
}

// 10. CHAT EM TEMPO REAL (COM OS DADOS OFICIAIS DO RELATÓRIO DE 26/11/2026 ÀS 11:43:23)
const MENSAGENS_BOTS_ZOACAO = [
  { autor: "Relatório Oficial UERR (11:43:23)", bairro: "Portal UERR", texto: "🏆 SAIU O PDF OFICIAL! Coordenador(a) de Ciência da Computação: 1º CLENYA REJANE BARROS DE LIMA (70,65% - 3 Docentes, 4 Técnicos, 32 Discentes) vs 2º CAIO DE JESUS GREGORATTO (29,35% - 2 Docentes, 0 Técnicos, 5 Discentes)!" },
  { autor: "VALBERT BRENO GOMES FARIAS", bairro: "Canarinho", texto: "Falei que saía hoje cedo!! Olha a matemática: 3/5 docentes = 42%, 4/4 técnicos = 20%, 32/37 alunos = 8,65% -> 42 + 20 + 8,65 = 70,65% CRAVADOS pra Dra. Clenya! 📊🔥" },
  { autor: "WANDEILSON FERNANDES COSTA", bairro: "Boa Vista - RR", texto: "Já atualizei o site com o PDF oficial de 26/11 kkkkkk mas quem foi o 1 ALUNO que votou NULO em Ciência da Computação?!" },
  { autor: "Detetive do Voto Nulo", bairro: "Canarinho", texto: "32 alunos votaram na Clenya, 5 votaram no Caio, 0 em Branco e 1 NULO! Apareça imediatamente o autor do voto nulo kkkkk 🕵️‍♂️" },
  { autor: "Fiscal da Abstenção", bairro: "Pintolândia", texto: "Gente, tinha 73 alunos de Computação na lista do SEI e só 38 votaram (37 válidos + 1 nulo)! 35 alunos simplesmente DORMIRAM e perderam a eleição!" },
  { autor: "Analista dos Técnicos TI", bairro: "Canarinho", texto: "O verdadeiro capote foi nos Técnicos-administrativos: 4 a 0 pra Dra. Clenya! Garantiu os 20% inteirinhos do peso técnico sem dividir nada!" },
  { autor: "Observador do Colegiado", bairro: "Paraviana", texto: "Nos professores foi 3 a 2 (Clenya 42% vs Caio 28%)! Se 1 professor tivesse virado o voto pro Caio, os docentes ficariam 28% a 42%!" },
  { autor: "Curioso do PDF Geral (Pág. 6/6)", bairro: "Rorainópolis", texto: "Gente e Ciências Agrárias na página 6 do PDF que teve ZERO votos?! 0 Docente, 0 Técnico e 0 Discente kkkkkkk 👻🌾" },
  { autor: "Repórter do Curso de Turismo", bairro: "Centro", texto: "Em Turismo a professora Rosijane ganhou com 3 votos de professores, 0 técnicos e ZERO alunos votando (70,00%)! E em Letras teve 1 PROFESSOR que votou NULO!" },
  { autor: "ADRIAN HARR RODRIGUES", bairro: "Canarinho", texto: "Ciência da Computação foi o ÚNICO curso da UERR inteira que teve disputa entre 2 candidatos! Os outros 17 cursos foram candidato único!" },
  { autor: "ALEXANDRE YUKIO OYAMA DE SOUZA", bairro: "Paraviana", texto: "Dra. Clenya eleita com 70,65%! Podem separar o terno que as 54 bancas de TCC por semestre estão oficialmente confirmadas para 2027/2029!" },
  { autor: "JOSE ARTHUR SANTANA ECHECHURRY CRUZ", bairro: "Caçari", texto: "Os 5 alunos que votaram no Prof. Caio já estão convidados para o grupo VIP de Blender 3D e Google Talk no Linux!" },
  { autor: "GELSON BARROS DOS SANTOS JUNIOR", bairro: "Mecejana", texto: "32 alunos na Clenya valeram 8,65% e os 2 professores do Caio valeram 28,00%! A matemática do Item 3.5.1 é implacável kkkkk" },
  { autor: "GABRIELA MONTEIRO ALEM", bairro: "São Pedro", texto: "Pelo menos Computação teve 38 alunos votando! Só perdeu pra Contábeis (43 alunos), batemos Medicina (29 alunos) e Direito (18 alunos)!" },
  { autor: "PIETRA MARIA CHAVES DE OLIVEIRA", bairro: "Canarinho", texto: "Parabéns Dra. Clenya (70,65%) e Prof. Caio (29,35%) pela única eleição com emoção de verdade na UERR 2026! 🎉🖥️" }
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
  document.getElementById("digit1").textContent = "🔒";
  document.getElementById("digit2").textContent = "🛑";

  const preview = document.getElementById("urnaPreview");
  const hint = document.getElementById("urnaHint");

  preview.style.display = "flex";
  document.getElementById("urnaCandImg").src = "clenya.gif";
  document.getElementById("urnaCandName").textContent = "🛑 ELEIÇÃO JÁ ACABOU! URNA LACRADA!";
  document.getElementById("urnaCandParty").textContent = "Relatório Oficial Emitido em 26/11/2026 às 11:43:23";
  document.getElementById("urnaCandSlogan").textContent = "🏆 Dra. Clenya Rejane Barros de Lima ELEITA com 70,65% vs 29,35% (Msc. Caio)!";

  hint.innerHTML =
    "🚨 <strong>A ELEIÇÃO JÁ ACABOU!</strong> As urnas foram encerradas em 25/11 às 22:00:00 e o Relatório Oficial já proclamou a vitória da <strong>Dra. Clenya (70,65%)</strong>! Se você faz parte dos <strong>35 alunos que esqueceram de votar</strong>, agora só em 2028 kkkkkk!";
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

  // Ao entrar no site, já mostra automaticamente a tela de Vitória Oficial da Dra. Clenya!
  setTimeout(() => {
    dispararTelaVitoriaFuzue("clenya");
  }, 250);

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

  // Controles da Urna Eletrônica (Agora Lacrada porque a eleição já acabou!)
  document.getElementById("btnOpenUrna").addEventListener("click", abrirModalUrna);
  document.getElementById("btnCloseUrna").addEventListener("click", fecharModalUrna);

  function alertarEleicaoEncerradaUrna() {
    tocarBeepUrna(240, 0.18);
    const hint = document.getElementById("urnaHint");
    hint.innerHTML =
      "🛑 <strong>VOTAÇÃO ENCERRADA!</strong> Não adianta apertar teclado: a eleição já acabou e o Relatório Oficial de 26/11 (11:43:23) já confirmou <strong>Dra. Clenya eleita com 70,65%</strong>!";
  }

  document.querySelectorAll(".num-key").forEach(btn => {
    btn.addEventListener("click", alertarEleicaoEncerradaUrna);
  });

  document.getElementById("keyCorrige").addEventListener("click", alertarEleicaoEncerradaUrna);
  document.getElementById("keyBranco").addEventListener("click", alertarEleicaoEncerradaUrna);

  document.getElementById("keyConfirma").addEventListener("click", () => {
    alertarEleicaoEncerradaUrna();
    const autor = document.getElementById("chatIdentitySelect").value;
    adicionarMensagemChat({
      autor: `🛑 URNA LACRADA (${autor})`,
      bairro: "Seção Eleitoral UERR",
      texto: "Tentou votar atrasado na urna eletrônica, mas a eleição já acabou e a Dra. Clenya já venceu com 70,65%! 😂🔒",
      sistema: true
    });
  });

  // Controles da Tela de Vitória Oficial da Dra. Clenya
  document.getElementById("btnCloseVictory").addEventListener("click", fecharTelaVitoriaFuzue);

  document.getElementById("btnFuzueHorn").addEventListener("click", () => {
    tocarFanfarraFuzue();
    explodirFogosExtras();
  });
});

// ============================================================================
// 13. TELA DE VITÓRIA "MODO FUZUÊ TOTAL" (CONFETES, FOGOS, SIRENE E DECRETOS)
// ============================================================================
let vencedorFuzueAtual = "clenya";
let confettiAnimId = null;
let particulasFuzue = [];

const DADOS_VITORIA = {
  clenya: {
    chapa: "1º LUGAR OFICIAL • RELATÓRIO DAS ELEIÇÕES UERR (26/11/2026 ÀS 11:43:23)",
    nome: "DRA. CLENYA REJANE BARROS DE LIMA",
    img: "clenya.gif",
    badge: "🏆 ELEITA OFICIALMENTE COM 70,65% (3 DOCENTES • 4 TÉCNICOS • 32 DISCENTES)!",
    stamp: "👑 COORDENADORA ELEITA 2027/2029",
    quote: "\"Agradeço aos 32 alunos (8,65%), aos 4 técnicos pela unanimidade (20,00%) e aos 3 colegas docentes (42,00%)! Quanto aos 35 alunos que não votaram e ao 1 que votou NULO: nos vemos nas 54 bancas de TCC!\"",
    origem: "3 Docentes (42%) + 4 Técnicos (20%) + 32 Alunos (8,65%)",
    decretos: [
      "📊 <strong>HOMOLOGAÇÃO 70,65%:</strong> Vitória oficial confirmada com 39 votos nominais válidos contra 7 (29,35%) e 1 lendário voto nulo discente.",
      "🛠️ <strong>TROFÉU UNANIMIDADE TÉCNICA:</strong> Os 4 Técnicos-Administrativos que garantiram 4x0 (20% inteiros) têm café expresso vitalício na Coordenação.",
      "🕵️ <strong>CPI DO VOTO NULO & ABSTENÇÕES:</strong> Investigação aberta no SEI para descobrir quem foi o 1 aluno que votou NULO e acordar os 35 alunos que dormiram.",
      "📚 <strong>DECRETO Nº 01 (BANCAS):</strong> O TCC agora começa no 1º semestre e terá 54 bancas avaliadoras presididas pela Dra. Clenya nas normas ABNT.",
      "🌐 <strong>DECRETO Nº 02 (MOODLE):</strong> Todo aluno deverá concluir 24 cursos de Moodle EaD e Gamificação antes de pedir colação de grau.",
      "☕ <strong>DECRETO Nº 03:</strong> Wandeilson Fernandes e Valbert Breno estão nomeados Auditores Vitalícios das Eleições de Ciência da Computação!"
    ]
  },
  caio: {
    chapa: "REALIDADE ALTERNATIVA • RECONTAGEM PARALELA EM 60 FPS NO BLENDER 3D",
    nome: "MSC. CAIO DE JESUS GREGORATTO",
    img: "caio.gif",
    badge: "🚨 E SE OS 35 ALUNOS AUSENTES TIVESSEM ACORDADO?! VIRADA EM 60 FPS!",
    stamp: "👑 COORDENADOR (MULTIVERSO LINUX)",
    quote: "\"No PDF oficial fizemos 29,35% (2 Docentes = 28% e 5 Alunos fiéis = 1,35%), quase empatando nos professores (2x3)! Mas neste multiverso do Blender 3D os 35 alunos que dormiram acordaram!\"",
    origem: "2 Docentes (28%) + 5 Alunos Raiz + Multiverso Blender",
    decretos: [
      "🏅 <strong>MEDALHA AOS 5 ALUNOS FIÉIS:</strong> Os 5 discentes que votaram no Caio no relatório oficial têm nota 10 automática em Computação Gráfica e IA.",
      "👨‍🏫 <strong>QUASE EMPATE DOCENTE (3x2):</strong> Com 2 votos docentes (28,00% da eleição), bastava 1 professor virar para o placar docente inverter para 42% a 28%!",
      "🍩 <strong>DECRETO DO MULTIVERSO:</strong> A matéria de TCC foi substituída por modelar um Trator e um Donut 3D no Blender renderizado em Linux.",
      "⌨️ <strong>PROVA SENAC 2002:</strong> Curso obrigatório de Digitação 60h para os 35 alunos que esqueceram de digitar o voto no sistema CAFe.",
      "💬 <strong>GOOGLE TALK OFICIAL:</strong> O WhatsApp do curso será substituído pelo Google Talk (caiogrego@icomp.ufam.edu.br).",
      "🌾 <strong>INTEGRAÇÃO AGRO-BCC:</strong> Transferência solidária de votos para o curso de Ciências Agrárias que terminou o relatório oficial com 0 votos!"
    ]
  }
};

function tocarPirililimUrna() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notas = [
      { f: 987.77, t: 0, d: 0.09 },
      { f: 1318.51, t: 0.09, d: 0.09 },
      { f: 987.77, t: 0.18, d: 0.09 },
      { f: 1318.51, t: 0.27, d: 0.09 },
      { f: 987.77, t: 0.36, d: 0.09 },
      { f: 1318.51, t: 0.45, d: 0.45 }
    ];
    notas.forEach(n => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(n.f, ctx.currentTime + n.t);
      gain.gain.setValueAtTime(0.12, ctx.currentTime + n.t);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + n.t);
      osc.stop(ctx.currentTime + n.t + n.d);
    });
  } catch (e) {}
}

function tocarFanfarraFuzue() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    // Fanfarra + Buzinaço de festa
    const seq = [
      { f: 523.25, t: 0.0, d: 0.14 },
      { f: 659.25, t: 0.15, d: 0.14 },
      { f: 783.99, t: 0.30, d: 0.14 },
      { f: 1046.50, t: 0.45, d: 0.35 },
      { f: 783.99, t: 0.82, d: 0.14 },
      { f: 1046.50, t: 0.98, d: 0.55 }
    ];
    seq.forEach(n => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(n.f, ctx.currentTime + n.t);
      gain.gain.setValueAtTime(0.11, ctx.currentTime + n.t);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + n.t + n.d);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + n.t);
      osc.stop(ctx.currentTime + n.t + n.d);
    });
  } catch (e) {}
}

function dispararTelaVitoriaFuzue(vencedor) {
  vencedorFuzueAtual = vencedor;
  const info = DADOS_VITORIA[vencedor];
  const overlay = document.getElementById("victoryOverlay");
  const modalBox = document.getElementById("victoryModalBox");

  modalBox.classList.remove("theme-clenya", "theme-caio");
  modalBox.classList.add(vencedor === "clenya" ? "theme-clenya" : "theme-caio");

  document.getElementById("vicBadgeTop").textContent = info.badge;
  document.getElementById("vicImg").src = info.img;
  document.getElementById("vicStamp").textContent = info.stamp;
  document.getElementById("vicChapa").textContent = info.chapa;
  document.getElementById("vicName").textContent = info.nome;
  document.getElementById("vicQuote").textContent = info.quote;
  document.getElementById("vicDecisiveOrigin").textContent = info.origem;

  const pctEl = vencedor === "clenya"
    ? document.getElementById("pctClenya").textContent
    : document.getElementById("pctCaio").textContent;
  document.getElementById("vicFinalPct").textContent = pctEl;

  const ul = document.getElementById("vicDecreesList");
  ul.innerHTML = "";
  info.decretos.forEach(d => {
    const li = document.createElement("li");
    li.innerHTML = d;
    ul.appendChild(li);
  });

  overlay.style.display = "flex";
  tocarPirililimUrna();
  setTimeout(tocarFanfarraFuzue, 550);
  iniciarChuvaConfeteEFogos(vencedor);
}

function fecharTelaVitoriaFuzue() {
  document.getElementById("victoryOverlay").style.display = "none";
  if (confettiAnimId) {
    cancelAnimationFrame(confettiAnimId);
    confettiAnimId = null;
  }
}

function iniciarChuvaConfeteEFogos(vencedor) {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const cores = vencedor === "clenya"
    ? ["#a855f7", "#ec4899", "#fde047", "#38bdf8", "#ffffff"]
    : ["#10b981", "#06b6d4", "#fde047", "#22c55e", "#ffffff"];

  particulasFuzue = [];
  for (let i = 0; i < 160; i++) {
    particulasFuzue.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 11 + 6,
      h: Math.random() * 7 + 4,
      cor: cores[Math.floor(Math.random() * cores.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 4.5 + 2.5,
      rot: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10
    });
  }

  if (confettiAnimId) cancelAnimationFrame(confettiAnimId);

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particulasFuzue.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vRot;
      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.cor;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    confettiAnimId = requestAnimationFrame(loop);
  }
  loop();
}

function explodirFogosExtras() {
  const canvas = document.getElementById("confettiCanvas");
  const cx = Math.random() * (canvas.width * 0.6) + canvas.width * 0.2;
  const cy = Math.random() * (canvas.height * 0.4) + canvas.height * 0.15;
  const cores = ["#fde047", "#ef4444", "#a855f7", "#10b981", "#38bdf8", "#ec4899"];

  for (let i = 0; i < 70; i++) {
    const ang = Math.random() * Math.PI * 2;
    const vel = Math.random() * 8 + 2;
    particulasFuzue.push({
      x: cx,
      y: cy,
      w: 10,
      h: 10,
      cor: cores[Math.floor(Math.random() * cores.length)],
      vx: Math.cos(ang) * vel,
      vy: Math.sin(ang) * vel,
      rot: 0,
      vRot: 12
    });
  }
}
