import json
from utils.language_int_converter import get_lang_shortcut


def get_sheet(lang_id: int) -> dict:
    lang = get_lang_shortcut(lang_id)
    with open(f"langs/{lang}.json") as file:
        data = json.loads(str(file.read()))
        print(data)
        return data
