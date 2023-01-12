import { ChangeEvent, useCallback, useContext, useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { inputState, ITodoTypes, todoState } from "../todo";
import { Input, Button } from "@mui/material";
import React from "react";
import TodoItem from "./TodoItem";
import { ThemContext } from "../context/ThemContext";

const RecoilPrc = () => {
    const inputRef = useRef();
    // const isDark = InstanceType<typeof ThemContext>;
    // type myType = InstanceType<typeof ThemContext>;
    const { isDark, setIsDark } = useContext(ThemContext);
    console.log('==> data : ', isDark);
    console.log('==> isDark : ', setIsDark);

    const toggleThem = () => {
        setIsDark(!isDark);
    };


    useEffect(() => {
        // console.log(inputRef);
        // alert(`어서오세요 ToDo List 입니다.🙏`);
    }, []);

    const [content, setContent] = useRecoilState<string>(inputState);

    const todos = useRecoilValue<ITodoTypes[]>(todoState);
    const setTodo = useSetRecoilState<ITodoTypes[]>(todoState);

    // const [todos, setTodo] = useRecoilState<ITodoTypes[]>(todoState);

    // * useCallback의 댑스가 memories 기법 사용하는 부분
    // * 기억했다가 다시 쓰는 재사용 최적화
    const addTodo = useCallback((): void => {
        if (!content.trim()) {
            return;
        }

        const nextId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
        // const nextId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
        const todo: ITodoTypes = {
            id: nextId,
            contents: content,
            isCompleted: false,
        };

        setTodo([...todos, todo]);
        setContent("");
    }, [content, setContent, todos, setTodo]);

    // * hanldle click
    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    }, [setContent]);

    // * hanldle click
    const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    }, [addTodo]);

    return (
        <div>
            <h2
                style={{
                    backgroundColor: isDark ? 'dark' : 'ligthgray',
                    color: isDark ? 'white' : 'black',
                }}
            >Recoil Todo</h2>
            <div>
                <Input
                    autoFocus={true}
                    type="text"
                    placeholder="내용입력해라 애송아"
                    value={content}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <Button
                    variant="contained"
                    onClick={addTodo}
                >
                    등록하기
                </Button>
                <Button
                    onClick={toggleThem}
                >
                    색상변경
                </Button>
            </div>
            {
                todos.map((todo: ITodoTypes) => {
                    const { id, contents, isCompleted } = todo;
                    return (
                        <TodoItem
                            key={id}
                            id={id}
                            content={contents}
                            isCompleted={isCompleted}
                        />
                    );
                })
            }
        </div>
    );
};

export default RecoilPrc;