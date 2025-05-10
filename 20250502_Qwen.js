// 1. 탭 전환 기능
function openTab(evt, tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');

  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}

// 2. 네트워크 차트 생성
document.addEventListener("DOMContentLoaded", function () {
  const nodes = [
    {id: "홍석민", group: 1, r: 10},
    {id: "추교섭", group: 1, r: 10},
    {id: "심영훈", group: 1, r: 10},
    {id: "배정필", group: 1, r: 10},
    {id: "김영문", group: 1, r: 10},
    {id: "이도희", group: 1, r: 10},
    {id: "오승훈", group: 1, r: 10},

    {id: "야간 근무 형태 변경 요청", group: 2, r: 8},
    {id: "주휴수당 문제", group: 2, r: 8},
    {id: "물류 분리 교섭", group: 2, r: 8},
    {id: "조합원 활동 개선", group: 2, r: 8},
    {id: "워크숍 계획", group: 2, r: 8}
  ];

  const links = [
    {source: "홍석민", target: "야간 근무 형태 변경 요청"},
    {source: "추교섭", target: "야간 근무 형태 변경 요청"},
    {source: "심영훈", target: "주휴수당 문제"},
    {source: "추교섭", target: "주휴수당 문제"},
    {source: "김영문", target: "물류 분리 교섭"},
    {source: "심영훈", target: "물류 분리 교섭"},
    {source: "이도희", target: "조합원 활동 개선"},
    {source: "오승훈", target: "조합원 활동 개선"},
    {source: "배정필", target: "워크숍 계획"},
    {source: "홍석민", target: "워크숍 계획"}
  ];

  const chartContainer = d3.select("#network-chart");
  let width, height = 500; // 높이는 우선 고정값으로 설정, 필요시 너비에 따라 비율로 조정 가능

  let svg, g, simulation, link, node, label, zoomHandler; // 주요 변수들을 밖으로 빼서 resize 시 접근 가능하도록 함

  function initializeChart() {
    // 기존 SVG가 있다면 제거 (리사이즈 시 재생성)
    chartContainer.selectAll("svg").remove();

    // 컨테이너의 현재 너비를 가져옴
    width = chartContainer.node() ? chartContainer.node().getBoundingClientRect().width : 960;
    // 모바일에서는 높이도 너비에 비례하게 조절하거나, 최소/최대 높이를 설정할 수 있습니다.
    // 예: height = width * 0.6; (너비의 60%를 높이로)
    // 또는 height = Math.max(300, Math.min(width * 0.7, 500)); (최소 300, 최대 500, 너비의 70%)
    // 여기서는 우선 고정된 500을 사용하나, 필요에 따라 위 주석처럼 동적으로 변경 가능합니다.

    svg = chartContainer
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .style("max-width", "100%")
      .style("height", "auto"); // CSS로도 height: auto; 가 적절할 수 있음

    g = svg.append("g");

    simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(120))
      .force("charge", d3.forceManyBody().strength(-100)) // 모바일에서는 조금 덜 밀어내도록 조정 가능
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide().radius(d => (d.r || 8) + 4).iterations(2));

    link = g.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", 1.5);

    node = g.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", d => d.r || 8)
      .attr("fill", d => d.group === 1 ? "#007bff" : "#28a745")
      .call(drag(simulation));

    node.append("title")
      .text(d => d.id);

    label = g.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .selectAll("text")
      .data(nodes)
      .join("text")
      .text(d => d.id)
      .attr("dx", d => (d.r || 8) + 2)
      .attr("dy", ".35em");

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

      label
        .attr("x", d => d.x)
        .attr("y", d => d.y);
    });

    zoomHandler = d3.zoom()
        .scaleExtent([0.2, 5])
        .on("zoom", (event) => {
          g.attr("transform", event.transform);
        });

    svg.call(zoomHandler);
  }

  function drag(simulation) {
    // (drag 함수 내용은 이전과 동일)
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      // d.fx = null; // 드래그 후 위치 고정 해제하려면 주석 해제
      // d.fy = null;
    }
    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }

  // 초기 차트 생성
  initializeChart();

  // 창 크기 변경 시 차트 다시 그리기 (디바운스 적용)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      initializeChart(); // 차트 전체를 다시 초기화
      // 또는, 기존 시뮬레이션과 요소들을 재사용하면서 크기만 업데이트하는 더 최적화된 방법을 사용할 수 있습니다.
      // 예: updateChartDimensions();
    }, 250); // 250ms 디바운스
  });

  // 더 최적화된 리사이즈 핸들러 (시뮬레이션 재시작 없이 크기만 업데이트)
  // function updateChartDimensions() {
  //   width = chartContainer.node() ? chartContainer.node().getBoundingClientRect().width : 960;
  //   // height = ... // 높이도 필요시 업데이트

  //   svg.attr("width", width)
  //      .attr("height", height)
  //      .attr("viewBox", [0, 0, width, height]);

  //   simulation.force("center", d3.forceCenter(width / 2, height / 2));
  //   // 기존 줌 상태를 유지하면서 뷰를 업데이트하려면 추가 로직이 필요할 수 있습니다.
  //   // 예: 현재 줌 상태를 저장했다가, 새로운 크기에 맞게 재조정 후 적용
  //   const currentTransform = d3.zoomTransform(svg.node());
  //   svg.call(zoomHandler.transform, currentTransform); // 현재 줌 상태로 다시 적용 (새로운 크기에 맞게 조정될 수 있음)

  //   simulation.alpha(0.3).restart(); // 시뮬레이션을 부드럽게 재시작하여 새 중앙점으로 이동
  // }
  // window.addEventListener('resize', () => {
  //   clearTimeout(resizeTimer);
  //   resizeTimer = setTimeout(updateChartDimensions, 250);
  // });

});