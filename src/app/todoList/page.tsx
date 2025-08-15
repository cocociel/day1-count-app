export default function todoList() {

  return (
    <>
      <div data-section="page-all">
        <div data-section="page-header">
          <div data-section="page-title">
            <h1>TODO LIST</h1>
          </div>
          <div data-section="page-search">
            <label htmlFor="search">タスク名：</label>
            <input id="search" type="text" />
            <button>add</button>
          </div>
        </div>
        <div data-section="page-todo">
          <div data-section="page-sumary">
            <hr />
            <p>サマリ (　未完了：13　/　完了：26　/　累計：39　) </p>
          </div>
          <div data-section="page-tasklist">
            <div data-section="page-task">
              <button>chk</button>
              <input type="text" />
              <button>upd</button>
              <button>del</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}