# Streamlit Comments Component

This component display comments / notes in your app. I am using it in combination with a streamlit form to collect user feedback. The feedback is saved in an sql table. 

Check out the [live demo](https://st-comments.streamlit.app/)!


## Installation

To install st_comments, you can use pip:

````
pip install st_comments
````

## Usage

To use the st_comments component, you just need to import it in your Streamlit script and call it like any other Streamlit function:
    
```` python
from st_comments import st_comments
````

```` python
def st_comments(comments,delete_keyword="", max_height="500px",custom_css="",key="st_comments",min_height="100px",
                custom_font_awesome_url = "https://kit.fontawesome.com/c7cbba6207.js", delete_user="all")
````

## Parameters

- **comments**: List of comments to be displayed. Default: [] <br>
```` python
#Example Input:
comments = [
    {"id": 1, "user": "User 1", "date": "2023-01-01", "text": "Comment 1"},
    {"id": 2, "user": "User 2", "date": "2023-01-02", "text": "Comment 2"},
    {"id": 3, "user": "User 3", "date": "2023-01-03", "text": "Comment 3"},
     {"id": 4, "user": "User 1", "date": "2023-01-01", "text": "Comment 1"},
    {"id": 5, "user": "User 2", "date": "2023-01-02", "text": "Comment 2"},
    {"id": 6, "user": "User 3", "date": "2023-01-03", "text": "Comment 3"},
]
````

- **delete_keyword**: Text that will be displayed in the delete button (accepts HTML). Default: "" <br>

- **max_height**: Maximum height of the component. Default: "500px" <br>

- **custom_css**: Custom CSS to be applied to the table. Can just be a string like  `.MuiTableCell-root {color:red;}`  Default: "". The text will be rendered in `<style>` tags above the component. <br>

- **key**: Key of the component. Default: "st_comments" <br>

- **min_height**: Minimum height of the component. Default: "100px" <br>

- **custom_font_awesome_url**: URL of the font awesome library. Default: "https://kit.fontawesome.com/c7cbba6207.js". <br>

- **delete_user**: If "all", all users can delete all comments. If "own", users can only delete their own comments. Default: "all", if "none" no comments can be deleted <br>

## Note worthy

"Deleting" a will not actually delete anything. What happens is that the comments will not be visible in the frontend anymore and that the component returns a the orginial input with the deleted comment missing. 




