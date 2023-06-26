import streamlit as st
from st_comments import st_comments
from datetime import datetime as dt

st.set_page_config(layout="wide")

st.title('Streamlit Comments Component Demo')
st.divider()
st.title('Basic Usage')

with st.echo():

    col1, col2 = st.columns((1, 1))
    # Dummy data
    comments = [
        {"id": 1, "user": "User 1", "date": "2023-01-01", "text": "Comment 1"},
        {"id": 2, "user": "User 2", "date": "2023-01-02", "text": "Comment 2"},
        {"id": 3, "user": "User 3", "date": "2023-01-03", "text": "Comment 3"},
        {"id": 4, "user": "User 1", "date": "2023-01-01", "text": "Comment 1"},
        {"id": 5, "user": "User 2", "date": "2023-01-02", "text": "Comment 2"},
        {"id": 6, "user": "User 3", "date": "2023-01-03", "text": "Comment 3"},
    ]

    if "comments" not in st.session_state:
        st.session_state.comments = comments


    with col1:
            # Use the component
        updated_comments = st_comments(comments=comments)

    with col2:
        with st.expander("Show Output"):    
            st.write(updated_comments)


st.divider()

st.title('Advanced Usage')

with st.echo():
    col1,col2 = st.columns((1,1))

    with col2: 
        dlt_keyword = st.text_input("Delete Keyword","<b>Delete</b>")
        dlt_user = st.selectbox("Delete User",["all","none","User 1","User 2","User 3"])
        custom_css = st.text_area("Custom CSS", """.MuiTypography-body1 {
        font-size: 12px;
        }
        .MuiCardActions-spacing {
            right: 5px !important;
            top: 5px !important;
            }
        .MuiCardActions-root {
        padding: 0px !important;
        }
        .MuiButtonBase {
        padding: 0px !important;
        }
        .MuiSvgIcon-fontSizeMedium {
        font-size: 20px !important;
        }
        .MuiButton-textSizeSmall {
        padding: 0px !important;
        }
        .MuiPaper-rounded{
        border-radius: 0px !important;
        }
        .MuiCardContent-root {
        padding-top: 8px !important;
        padding-left: 5px !important;
        padding-right: 5px !important;
        padding-bottom: 12px !important;
        }
        """, height=300)

    with col1:
        # Use the component
        updated_comments = st_comments(comments=comments,delete_keyword=dlt_keyword,delete_user=dlt_user,custom_css=custom_css,key="comments2")


st.divider()

