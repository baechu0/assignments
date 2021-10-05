/*React를 사용해 본 적이 없어 과제를 완료하지 못했습니다. 
간단히 제가 공부해 본 React의 특징을 정리하겠습니다.

React란 프론트엔드 라이브러리이다.*/

/*React 홈페이지에 있는 To-do list 예제*/
class TodoApp extends React.Component {
  //props는 속성을 나타내는 데이터
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  //호출 시 #new-todo input의 값을 setState함
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  //폼 제출 시 호출 됨
  handleSubmit(e) {
    e.preventDefault();
    //값 없으면 리턴
    if (this.state.text.length === 0) {
      return;
    }
    //위 setState된 값으로 새 요소 생성
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    //append와 동일 한 동작으로 추정
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

//컴포넌트 == 요소??
class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todos-example')
);