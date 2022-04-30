# Awesomodal - Simple react.js modal

## About
Simple react modal to use for your next project, with fully custom styling options.

## Getting Started
install with npm :
```shell
npm install --save awesomodal
```
or, with yarn :
```shell
yarn add awesomodal
```

# How to use the lib

1. First, Import the Modal 
```javascript
import Modal from "awesomodal/dist/modal"
```

2. Then, declare your state and close function logic
```javascript
const [ isOpen, setIsOpen ] = useState(false);

const closeModal = () => {
        setIsOpen(false);
    };
```

3. Add content in the modal
```javascript
<Modal state={modal} config={{}} close={closeModal}>
    {/* content */}
</Modal>
```

4. For the style, use the style prop. You can pass an object with content and/or backdrop
example:
```javascript
const style = {
    content: {
        {/* STYLE HERE FOR THE MODAL BOX */}
    },
    backdrop: {
         {/* STYLE HERE FOR THE BACKDROP */}
    }
}
```

### Props

- isOpen: Boolean 
- hasBackdrop: Boolean
- style : {content?: Record<string, string>, backdrop?: Record<string, string>}
- onRequestClose: fn


## EXAMPLES

```javascript
const App = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };


    const style = {
        content: {
            ////
        },
        backdrop: {
            ///
        }
    };

    return (
        <>
            <button onClick={() => { setIsOpen(true); }} >open modal</button>
            <Modal isOpen={isOpen} onRequestClose={closeModal} hasBackdrop={true} style={style} >
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque beatae quia, asperiores eveniet ut, iure voluptas earum quos quo reprehenderit incidunt atque quasi voluptatem enim vel ipsa temporibus debitis odit?</p>
            </Modal>
        </>
    );
};
```