initSidebarItems({"fn":[["for_each_break_expr","Calls `cb` on each break expr inside of `body` that is applicable for the given label."],["for_each_tail_expr","Calls `cb` on each expression inside `expr` that is at “tail position”. Does not walk into `break` or `return` expressions. Note that modifying the tree while iterating it will cause undefined iteration which might potentially results in an out of bounds panic."],["get_path_at_cursor_in_tt","Parses the path the identifier is part of inside a token tree."],["get_path_in_derive_attr","Parses and returns the derive path at the cursor position in the given attribute, if it is a derive. This special case is required because the derive macro is a compiler builtin that discards the input derives."],["item_name",""],["lint_eq_or_in_group","Checks if the given lint is equal or is contained by the other lint which may or may not be a group."],["mod_path_to_ast","Converts the mod path struct into its ast representation."],["parse_tt_as_comma_sep_paths","Parses the input token tree as comma separated plain paths."],["pick_best_token","Picks the token with the highest rank returned by the passed in function."],["visit_file_defs","Iterates all `ModuleDef`s and `Impl` blocks of the given file."]],"mod":[["famous_defs","See [`FamousDefs`]."],["format_string","Tools to work with format string literals for the `format_args!` family of macros."],["generated_lints","Generated by `sourcegen_lints`, do not edit by hand."],["import_assets","Look up accessible paths for items."],["insert_use","Handle syntactic aspects of inserting a new `use` item."],["insert_whitespace_into_node","Utilities for formatting macro expanded nodes until we get a proper formatter."],["merge_imports","Handle syntactic aspects of merging UseTrees."],["node_ext","Various helper functions to work with SyntaxNodes."],["rust_doc","Rustdoc specific doc comment handling"]],"struct":[["SnippetCap",""]]});