Imports System.IO
Imports System.Net
Imports System.Net.Mail
Imports MySql.Data.MySqlClient
Imports System.Data
Imports MySql.Data

Partial Class Login
    Inherits System.Web.UI.Page

    Dim con As String = ConfigurationManager.ConnectionStrings("myConnectionString").ConnectionString
    Dim SQLConnection As New MySqlConnection(con)

    Dim cmd As New MySqlCommand
    Dim dr As MySqlDataReader

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Try
            If Session("login") = Nothing Then
                TextBox1.Focus()
            Else
                Response.Redirect("Home.aspx", False)
            End If
        Catch ex As Exception
            Response.Redirect("Home.aspx", False)
        End Try
    End Sub

    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles Button1.Click
        Dim en As String = TextBox1.Text
        'If en.Length = 6 And Char.IsLetter(en(0)) And Char.IsLetter(en(1)) And Char.IsDigit(en(2)) And Char.IsDigit(en(3)) And Char.IsDigit(en(4)) And Char.IsDigit(en(5)) Then
        'GoTo Line1
        'Else
        'Response.Write("<script>alert('Enter Valid Enrollment Number');</script>")
        'GoTo Line2
        'End If
Line1:
        Try
            cmd.CommandText = "select regno,pass from login where regno=@reg_no"
            cmd.Parameters.AddWithValue("@reg_no", TextBox1.Text)
            cmd.Connection = SQLConnection
            SQLConnection.Open()
            dr = cmd.ExecuteReader()
            If dr.Read Then
                If dr(1).ToString = TextBox2.Text.ToString Then
                    Session("login") = TextBox1.Text.ToString
                    Response.Redirect("Home.aspx", False)
                Else
                    Response.Write("<script>alert('Invalid Registration ID or Password');</script>")
                    'MsgBox("Invalid User Name or Password")
                End If
            Else
                Response.Write("<script>alert('Invalid User, If not signed up yet !!! SIGN UP');</script>")
                'MsgBox("Invalid User, If not signed up yet !!! SIGN UP")
            End If
        Catch ex As Exception
            MsgBox(ex.ToString)
            'Response.Redirect("ErrorPage.aspx", False)
        Finally
            SQLConnection.Close()
        End Try
Line2:
    End Sub
End Class