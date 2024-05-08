def create_list():
    ol_html = ""
    curr_tabs = 2
    with open("src/options.txt", "r") as options_in:
        ol_html += "<ol>\n"
        for i, option in enumerate(options_in):
            option = option.replace('\n', '')
            ol_html += '\t' * (curr_tabs+1)
            ol_html += f'<li><input type="checkbox" id="item{i+1}" name="item{i+1}"/><label for="item{i+1}"> {option}</label></li>\n'
        ol_html += '\t' * curr_tabs
        ol_html += "</ol>\n"


    with open("src/base_html.html", "r") as html_in:
        with open("src/single_page.html", "w") as html_out:
            base_html = html_in.read()
            new_html = base_html.replace("REPLACE_OL", ol_html)
            html_out.write(new_html)

if __name__ == "__main__":
    create_list()
